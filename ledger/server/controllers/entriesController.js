// entriesController.js
/* eslint-disable camelcase */
const pool = require("../db/config");

const createEntry = async (req, res) => {
  try {
    const {
      debit_account_id,
      credit_account_id,
      fk_user_id,
      amount,
      timestamp,
      reference,
      note,
    } = req.body;

    if (!debit_account_id || !credit_account_id || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const client = await pool.connect();
    try {
      await client.query("BEGIN");

      const debitMasterRes = await client.query(
        "SELECT master_account FROM accounts WHERE id = $1",
        [debit_account_id]
      );
      const creditMasterRes = await client.query(
        "SELECT master_account FROM accounts WHERE id = $1",
        [credit_account_id]
      );

      if (debitMasterRes.rows.length === 0 || creditMasterRes.rows.length === 0) {
        await client.query("ROLLBACK");
        return res.status(404).json({ error: "Account not found" });
      }

      const debitMaster = debitMasterRes.rows[0].master_account;
      const creditMaster = creditMasterRes.rows[0].master_account;

      const transQuery = `
        INSERT INTO transactions (fk_master_account, fk_user_id, amount, timestamp, reference, note)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;

      const debitTx = await client.query(transQuery, [
        debitMaster,
        fk_user_id,
        amount,
        timestamp,
        reference,
        note,
      ]);

      const creditTx = await client.query(transQuery, [
        creditMaster,
        fk_user_id,
        -amount,
        timestamp,
        reference,
        note,
      ]);

      const journalQuery = `
        INSERT INTO journal_entries (debit_account_id, credit_account_id, fk_user_id, amount, timestamp, reference, note)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;

      const journalRes = await client.query(journalQuery, [
        debit_account_id,
        credit_account_id,
        fk_user_id,
        amount,
        timestamp,
        reference,
        note,
      ]);

      await client.query("COMMIT");

      res.status(201).json({
        entry: journalRes.rows[0],
        debitTransaction: debitTx.rows[0],
        creditTransaction: creditTx.rows[0],
      });
    } catch (e) {
      await client.query("ROLLBACK");
      console.error(e);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getEntriesbyPeriod = async (req, res) => {
  try {
    const { period } = req.query;

    const query = `
      SELECT * FROM transactions
      ORDER BY timestamp DESC
      LIMIT $1;
    `;
    const values = [period];
    const result = await pool.query(query, values);

    res.status(200).json({ entries: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createEntry,
  getEntriesbyPeriod,
};
