const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/config');
const passport = require('passport');
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { username, email, password, companyName, yearEnd, industry, numberEmployees, address, description } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Check if the user already exists
    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create the company first
    const companyResult = await pool.query(
      'INSERT INTO companies (name, year_end, industry, number_employees, address, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [companyName, yearEnd, industry, numberEmployees, address, description]
    );
    const companyId = companyResult.rows[0].id;

    // Create the user and assign as the administrator of the new company
    const result = await pool.query(
      'INSERT INTO users (username, email, password, fk_company_id, role_id) VALUES ($1, $2, $3, $4, (SELECT id FROM roles WHERE name = $5)) RETURNING *',
      [username, email, hashedPassword, companyId, 'admin']
    );
    const user = result.rows[0];
    
    // Update the company to set the administrator_id
    await pool.query('UPDATE companies SET administrator_id = $1 WHERE id = $2', [user.id, companyId]);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Google OAuth login route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirect to your dashboard or desired route
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
