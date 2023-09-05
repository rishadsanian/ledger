// accountController.js
/* eslint-disable camelcase */
const { Pool } = require("pg");
const pool = require("../db/config");

const createAccount = async (req, res) => {
  try {
    const { name, account_number, account_type, fk_class_id, user_id } = req.body;

    // Insert a new account into the accounts table
    const query = `
      INSERT INTO accounts (name, account_number, account_type, fk_class_id, user_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [name, account_number, account_type, fk_class_id, user_id];

    const result = await pool.query(query, values);

    // Send a success response with the created account
    res.status(201).json({ account: result.rows[0] });
    console.log("Account Created");
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
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


module.exports = {
  createAccount,
  getAllAccounts,
};
