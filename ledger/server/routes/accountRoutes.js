const express = require('express');
const router = express.Router();

// Import controllers and middleware here
const accountController = require('../controllers/accountController');
const authMiddleware = require('../middleware/authMiddleware');

// Define your routes here

// Create Account
router.post('/', authMiddleware, accountController.createAccount);

// Get All Accounts
router.get('/', authMiddleware, accountController.getAllAccounts);

// Get Account by ID
router.get('/:id', authMiddleware, accountController.getAccountById);

// Update Account
router.put('/:id', authMiddleware, accountController.updateAccount);

// Delete Account
router.delete('/:id', authMiddleware, accountController.deleteAccount);

// Get Accounts by User
router.get('/user/:user_id', authMiddleware, accountController.getAccountsByUser);

// Search Accounts
router.get('/search', authMiddleware, accountController.searchAccounts);

module.exports = router;