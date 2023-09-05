//accountRoutes.js
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Define your routes here

// Create Account
router.post('/', accountController.createAccount);

// Get All Accounts
router.get('/', accountController.getAllAccounts);

// // Get Account by ID
// router.get('/:id', accountController.getAccountById);

// // Update Account
// router.put('/:id', accountController.updateAccount);

// // Delete Account
// router.delete('/:id', accountController.deleteAccount);

// // Get Accounts by User
// router.get('/user/:user_id', accountController.getAccountsByUser);

// // Search Accounts
// router.get('/search', accountController.searchAccounts);

module.exports = router;
