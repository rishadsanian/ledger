const pool = require('../db/config');
const blockchainService = require('./blockchainService');

/**
 * Persist a transaction to the database.
 * @param {Object} tx - transaction data
 * @returns {Promise<Object>} inserted transaction
 */
async function createTransaction(tx) {
  const {
    account_number,
    sub_account_number,
    fk_user_id,
    amount,
    timestamp,
    reference,
    note,
    transaction_id,
  } = tx;

  const query = `
    INSERT INTO transactions (
      account_number,
      sub_account_number,
      fk_user_id,
      amount,
      timestamp,
      reference,
      note,
      transaction_id
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *;
  `;
  const values = [
    account_number,
    sub_account_number,
    fk_user_id,
    amount,
    timestamp,
    reference,
    note,
    transaction_id,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
}

/**
 * Retrieve entries ordered by timestamp.
 * @param {number} period number of entries to return
 */
async function getEntriesByPeriod(period) {
  const query = `
    SELECT * FROM transactions
    ORDER BY timestamp DESC
    LIMIT $1;
  `;
  const values = [period];
  const result = await pool.query(query, values);
  return result.rows;
}

/**
 * Optionally forward transaction to blockchain layer based on USE_BLOCKCHAIN env var.
 * @param {Object} tx transaction data
 */
async function createTransactionWithBlockchain(tx) {
  const inserted = await createTransaction(tx);
  if (process.env.USE_BLOCKCHAIN === 'true') {
    try {
      await blockchainService.recordTransaction(inserted);
    } catch (err) {
      console.error('Blockchain recording failed:', err);
    }
  }
  return inserted;
}

module.exports = {
  createTransaction,
  getEntriesByPeriod,
  createTransactionWithBlockchain,
};
