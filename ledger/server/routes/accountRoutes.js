// accountRoutes.js
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Define your routes here

// Create Account
router.post('/', accountController.createAccount);

// Get All Accounts
router.get('/', accountController.getAllAccounts);

// Get All Sub-Accounts by Parent Account ID
router.get('/:id/sub-accounts', accountController.getAllSubAccountsByParentAccountId);

// Get All Sub-Accounts
router.get('/sub-accounts', accountController.getAllSubAccounts);

// Create Sub-Account
router.post('/sub-accounts', accountController.createSubAccount);

router.get('/classes', accountController.getAllClasses);
module.exports = router;
