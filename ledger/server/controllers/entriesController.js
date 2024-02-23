// entriesController.js
/* eslint-disable camelcase */
const { Pool } = require("pg");
const pool = require("../db/config");

const createEntry = async (req, res) => {
  try {
    const { account_number, sub_account_number,user_id, amount, timestamp, reference, note, transaction_id } = req.body;

    // Insert a new transaction into the transactions table
    const query = `
      INSERT INTO transactions (account_number, sub_account_number, user_id, amount, timestamp, reference, note, transaction_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;

    const values = [account_number, sub_account_number, user_id, amount, timestamp, reference, note, transaction_id];

    const result = await pool.query(query, values);

    // Send a success response with the created transaction
    res.status(201).json({ transaction: result.rows[0] });
    console.log("Transaction Posted");
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getEntriesbyPeriod = async (req, res) => {
  try {
    const { period } = req.query;

    // Fetch entries by period from the transactions table
    const query = `
      SELECT * FROM transactions
      ORDER BY timestamp DESC
      LIMIT $1;
    `;
    const values = [period];
    const result = await pool.query(query, values);

    // Send a success response with the retrieved entries
    res.status(200).json({ entries: result.rows });
    console.log("Retrieved entries by period");
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = {
  createEntry,
  getEntriesbyPeriod,
};
