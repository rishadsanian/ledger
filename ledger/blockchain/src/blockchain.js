const SHA256 = require('crypto-js/sha256');
class JournalEntry {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp =  new Date().toISOString();  // Dynamically set UTC timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0; // Add nonce for mining
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  // Mine the block by finding a hash with a specific number of leading zeros
  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++; // Increment nonce
      this.hash = this.calculateHash(); // Recalculate the hash with the new nonce
    }
    console.log("Block mined: " + this.hash);
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;  // Set mining difficulty (number of leading zeros)
  }

  createGenesisBlock() {
    return new Block(0, '01/01/2017', 'Genesis block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // Add a block to the chain and mine it
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);  // Mine the block before adding
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // Validate hash and previous hash
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

// Example Usage
let myCoin = new Blockchain();
console.log('Mining block 1...');
myCoin.addBlock(new Block(1, '10/07/2021', { amount: 4 }));
console.log('Mining block 2...');
myCoin.addBlock(new Block(2, '12/07/2021', { amount: 10 }));

console.log(JSON.stringify(myCoin, null, 4)); // Display the blockchain
console.log('Is blockchain valid?', myCoin.isChainValid()); // Check if the blockchain is valid
console.log('Tampering with the blockchain...');
myCoin.chain[1].data = { amount: 100 }; // Tamper with the blockchain
console.log('Is blockchain valid?', myCoin.isChainValid()); // Check if the blockchain is valid