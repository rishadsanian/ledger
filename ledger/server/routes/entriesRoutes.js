//entriesRoutes.js
const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entriesController');

// Define your routes here

// Create Account
router.post('/', entriesController.createEntry);

// Get  Entries by Period
router.get('/', entriesController.getEntriesbyPeriod);

// // Get Account by ID
// router.get('/:id', accountController.getAccountById);

// // Update Account
// router.put('/:id', accountController.updateAccount);

// // Delete Account
// router.delete('/:id', accountController.deleteAccount);

// // Get Entries by User
// router.get('/user/:user_id', accountController.getAccountsByUser);

// // Search Entries
// router.get('/search', accountController.searchAccounts);

module.exports = router;
