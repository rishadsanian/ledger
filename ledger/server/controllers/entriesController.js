// entriesController.js
/* eslint-disable camelcase */
const transactionService = require("../services/transactionService");

const createEntry = async (req, res) => {
  try {
    const inserted = await transactionService.createTransactionWithBlockchain(req.body);
    res.status(201).json({ transaction: inserted });
    console.log("Transaction Posted");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getEntriesbyPeriod = async (req, res) => {
  try {
    const { period } = req.query;

    const entries = await transactionService.getEntriesByPeriod(period);
    res.status(200).json({ entries });
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
