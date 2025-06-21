/**
 * Stubbed blockchain integration layer.
 * Replace implementations once blockchain module is ready.
 */

/**
 * Record a transaction on the blockchain.
 * @param {Object} tx transaction data saved in the DB
 * @returns {Promise<void>} resolves when recorded
 */
async function recordTransaction(tx) {
  // Placeholder for future blockchain logic
  // For now we simply return resolved promise to keep async behaviour
  return Promise.resolve();
}

module.exports = {
  recordTransaction,
};
