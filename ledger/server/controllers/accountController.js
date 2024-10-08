/* eslint-disable no-unused-vars */
// accountController.js
/* eslint-disable camelcase */
const { Pool } = require("pg");
const pool = require("../db/config");

const createAccount = async (req, res) => {
  try {
    const { name, account_number, account_type, fk_class_id, fk_user_id } =
      req.body;

    const master_account = fk_class_id + "-" + account_number + "-" + "0000";

    // Insert a new account into the accounts table
    const query = `
      INSERT INTO accounts (name, account_number, account_type, fk_class_id, fk_user_id, master_account)
      VALUES ($1, $2, $3, $4, $5, $6);
    `;

    const values = [
      name,
      account_number,
      account_type,
      fk_class_id,
      fk_user_id,
      master_account,
    ];

    await pool.query(query, values);

    // Send a success response
    res.status(201).json({ message: "Account created successfully" });
    console.log("Account Created");
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createSubAccount = async (req, res) => {
  try {
    const {
      name,
      account_number,
      account_type,
      fk_account_id,
      fk_class_id,
      fk_user_id,
    } = req.body;

    // Fetch the parent account number from the accounts table
    const parentAccountQuery =
      "SELECT account_number FROM accounts WHERE id = $1";
    const parentAccountResult = await pool.query(parentAccountQuery, [
      fk_account_id,
    ]);

    // Check if the parent account exists
    if (parentAccountResult.rows.length === 0) {
      return res.status(404).json({ error: "Parent account not found" });
    }

    const parentAccountNumber = parentAccountResult.rows[0].account_number;

    // Generate the master_account value
    const master_account = `${fk_class_id}-${parentAccountNumber}-${account_number}`;

    // Insert a new sub-account into the sub_accounts table
    const query = `
      INSERT INTO sub_accounts (name, account_number, account_type, fk_account_id, fk_class_id, fk_user_id, master_account)
      VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    const values = [
      name,
      account_number,
      account_type,
      fk_account_id,
      fk_class_id,
      fk_user_id,
      master_account,
    ];

    await pool.query(query, values);

    // Send a success response
    res.status(201).json({ message: "Sub-account created successfully" });
    console.log("Sub-Account Created");
  } catch (error) {
    // Handle any errors and send an error response
    console.error("Error creating sub-account:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllAccounts = async (req, res) => {
  try {
    // Fetch all accounts from the accounts table
    const query = "SELECT * FROM accounts;";
    const result = await pool.query(query);

    // Send a success response with the retrieved accounts
    res.status(200).json({ accounts: result.rows });
    console.log("Retrieved Accounts");
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllSubAccountsByParentAccountId = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch all sub-accounts for the specified parent account
    const query = "SELECT * FROM sub_accounts WHERE fk_account_id = $1;";
    const result = await pool.query(query, [id]);

    // Send a success response with the retrieved sub-accounts
    res.status(200).json({ subAccounts: result.rows });
    console.log("Retrieved Sub-Accounts for Parent Account ID:", id);
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllSubAccounts = async (req, res) => {
  try {
    // Fetch all sub-accounts from the sub_accounts table
    const query = "SELECT * FROM sub_accounts;";
    const result = await pool.query(query);

    // Send a success response with the retrieved sub-accounts
    res.status(200).json({ subAccounts: result.rows });
    console.log("Retrieved All Sub-Accounts");
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllClasses = async (req, res) => {
  try {
    // Fetch all classes from the classes table
    const query = "SELECT * FROM classes;";
    const result = await pool.query(query);

    // Send a success response with the retrieved classes
    res.status(200).json({ classes: result.rows });
    console.log("Retrieved Classes");
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const editAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, account_number, account_type, fk_class_id, fk_user_id } =
      req.body;

    // Update the specified account in the accounts table
    const query = `
      UPDATE accounts
      SET name = $1, account_number = $2, account_type = $3, fk_class_id = $4, fk_user_id = $5
      WHERE id = $6;
    `;

    const values = [
      name,
      account_number,
      account_type,
      fk_class_id,
      fk_user_id,
      id,
    ];

    const result = await pool.query(query, values);

    // Check if the account was found and updated
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Account not found" });
    }

    // Send a success response
    res.status(200).json({ message: "Account updated successfully" });
    console.log("Account Updated");
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createAccount,
  createSubAccount,
  getAllAccounts,
  getAllSubAccountsByParentAccountId,
  getAllSubAccounts,
  editAccount,
  getAllClasses,
};
