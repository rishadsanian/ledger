class Ledger {
  constructor() {
    this.entries = [];
  }

  addEntry(debitAccount, creditAccount, amount) {
    this.entries.push({
      debit: debitAccount,
      credit: creditAccount,
      amount: amount
    });
  }

  getDebitBalance(account) {
    return this.entries
      .filter(entry => entry.debit === account)
      .reduce((sum, entry) => sum + entry.amount, 0);
  }

  getCreditBalance(account) {
    return this.entries
      .filter(entry => entry.credit === account)
      .reduce((sum, entry) => sum + entry.amount, 0);
  }
}

const ledger = new Ledger();

ledger.addEntry("Cash", "equity", 1000);
ledger.addEntry("revenue", "cash", 500);

console.log("Cash debit balance: ", ledger.getDebitBalance("cash")); // 500
console.log("equity credit balance: ", ledger.getCreditBalance("equity")); // 1000

