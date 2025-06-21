// entriesController.js
/* eslint-disable camelcase */
const pool = require("../db"); // Ensure this is your pg pool instance
const transactionService = require("../services/transactionService");

const createEntry = async (req, res) => {
  try {
    const {
      fk_master_account,
      fk_user_id,
      amount,
      timestamp,
      reference,
      note,
      transaction_id,
    } = req.body;

    // Insert into the transactions table
    const query = `
      INSERT INTO transactions (fk_master_account, fk_user_id, amount, timestamp, reference, note, transaction_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    const values = [
      fk_master_account,
      fk_user_id,
      amount,
      timestamp,
      reference,
      note,
      transaction_id,
    ];

    const result = await pool.query(query, values);
    const transaction = result.rows[0];

    // Optionally, perform post-insert logic (e.g. blockchain update)
    await transactionService.createTransactionWithBlockchain(transaction);

    res.status(201).json({ transaction });
    console.log("Transaction inserted and processed");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
