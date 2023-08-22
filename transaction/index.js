// Allow multiple accounts to be created
// Each account can have many transactions
// Allow withdrawals and deposits into accounts
// Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
// Allow us to retrieve the current balance of the account at any time
// Don't allow withdrawals that exceed the remaining balance of the account

class User {
  constructor(userId, password) {
    (this.userId = userId), (this.password = password), this.email;
    this.accounts = [];
  }

  addEmail() {}

  // Method to add a new user
  addUser(userId, password) {
    this.userId = userId;
    this.password = password;
  }

  getSummary() {}
}

class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
    this.transactionCount = 0;
  }

  addAccount() {}

  // Method to retrieve the current balance of the account
  getBalance() {
    return this.balance;
  }

  // Method to retrieve the transaction history of the account
  getTransactionHistory() {
    return this.transactions;
  }
}

class Transaction {
  constructor(amount, account, activity) {
    this.activity = activity;
    this.account = account;
    this.amount = amount;
    this.transactionID = "T";
  }

  // Method to check if the transaction is allowed
  isAllowed() {
    return true;
  }

  // Method to update the account balance based on the transaction
  post() {
    this.account.balance += this.value;
  }

  // Method to generate a unique transaction ID
  generateTransactionID() {
    this.account.transactionCount++;
    this.transactionID += this.account.transactionCount;
  }

  // Method to record the transaction in the account's transaction history
  recordTransaction() {
    this.generateTransactionID();
    const transaction = {
      id: this.transactionID,
      account: this.account.name,
      activity: this.activity,
      amount: this.amount,
      date: new Date(),
    };

    this.account.transactions.push(transaction);
  }

  // Method to commit the transaction
  commit() {
    if (!this.isAllowed()) {
      this.activity = "Withdrawal Failed - Insufficient funds";
    }
    if (this.isAllowed()) {
      this.post();
    }
    this.recordTransaction();
  }
}

class Withdrawal extends Transaction {
  // Method to calculate the value for withdrawal transactions
  get value() {
    this.activity = "Withdrawal";
    return this.amount * -1;
  }

  // Method to check if the withdrawal is allowed based on the account balance
  isAllowed() {
    return this.account.balance >= this.amount;
  }
}

class Deposit extends Transaction {
  // Method to calculate the value for deposit transactions
  get value() {
    this.activity = "Deposit";
    return this.amount;
  }
}

// DRIVER CODE

const myAccount = new Account("Chequing");

console.log(myAccount.name);
console.log("Starting Balance:", myAccount.balance);

const t1 = new Deposit(100.0, myAccount);
t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

const t3 = new Withdrawal(1000, myAccount);
t3.commit();

const t4 = new Withdrawal(0, myAccount);
t4.commit();

console.log(myAccount.transactions);

console.log("Ending Balance:", myAccount.balance);
