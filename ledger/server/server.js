const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use a port of your choice

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//----------------------------------------------------------------------------//
const { Pool, Client } = require('pg');

// Create a new Pool instance (recommended for handling multiple connections)
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432 // Default PostgreSQL port
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database at:', res.rows[0].now);
  }
});
