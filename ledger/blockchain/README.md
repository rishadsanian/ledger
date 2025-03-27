
# Blockchain with Ethereum Integration

This project implements a basic blockchain using `Node.js` with added functionality for mining and verifying the integrity of the chain. It also integrates Ethereum and Web3.js for efficient interaction with the Ethereum network.

## Project Structure

```plaintext
.
├── blockchain.js        # Blockchain implementation (core logic)
├── package-lock.json    # NPM lock file
├── package.json         # Project metadata and dependencies
├── server.js            # WebSocket server to facilitate distributed nodes
├── .env                 # Environment variables (for private keys, node URLs, etc.)
└── README.md            # Project documentation
```

## Prerequisites

To get started, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Setup

1. **Install Dependencies**

   In your project directory, run:

   ```bash
   npm install
   ```

   This will install all necessary dependencies, including:

   - `crypto-js` for hashing functionality.
   - `dotenv` for managing environment variables.
   - `ethers` for Ethereum network interaction.
   - `web3` for interacting with Ethereum and decentralized applications.
   - `ws` for WebSocket support (used for building the distributed network).

2. **Configure Environment Variables**

   Create a `.env` file in the project root to store your private keys and Ethereum node URL. This is necessary to interact with Ethereum smart contracts or to send/receive transactions via the Ethereum network.

   Example `.env`:

   ```
   ETHEREUM_NODE_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
   ETH_PRIVATE_KEY=YOUR_PRIVATE_KEY
   ```

3. **Run the Server**

   To start the WebSocket server and begin interacting with the blockchain, run:

   ```bash
   node server.js
   ```

   This will set up the WebSocket server on `wss://localhost:8080` and start listening for incoming connections from other blockchain nodes.

4. **Interact with the Blockchain**

   The blockchain code in `blockchain.js` includes basic features like block creation, mining, and chain validation. You can add more blocks and interact with the blockchain through the WebSocket server by sending transactions and requests to mine blocks.

## Ethereum Integration

### Using Ethereum Efficiently

The project leverages the `ethers.js` and `web3.js` libraries to interact with the Ethereum blockchain. Here’s how you can use Ethereum to fund your blockchain transactions:

1. **Check Ethereum Balance**

   You can check your Ethereum balance using `ethers.js` by using the `getBalance` method, which interacts with the Ethereum node configured in your `.env` file.

2. **Send Ether**

   You can send Ether to another address by using your Ethereum private key to sign a transaction. For example:

   ```javascript
   const { ethers } = require('ethers');
   const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_NODE_URL);
   const wallet = new ethers.Wallet(process.env.ETH_PRIVATE_KEY, provider);

   async function sendEther() {
     const tx = await wallet.sendTransaction({
       to: 'RECIPIENT_ADDRESS',
       value: ethers.parseEther('0.01')  // Sending 0.01 ETH
     });
     console.log('Transaction hash:', tx.hash);
   }

   sendEther();
   ```

## How It Works

### Blockchain Structure

The blockchain is a linked list of `blocks`, where each block contains the following:

- **Index:** The position of the block in the blockchain.
- **Timestamp:** The time when the block was created.
- **Data:** The data stored in the block.
- **PreviousHash:** The hash of the previous block in the chain.
- **Hash:** The hash of the current block (calculated using SHA-256).
- **Nonce:** A value used to mine the block (by finding a hash with a specific number of leading zeros).

### Mining

Mining is achieved by finding a hash with a specific number of leading zeros. This process involves calculating the hash repeatedly, incrementing the `nonce` until a valid hash is found.

### Distributed Network

The network is made up of multiple nodes (WebSocket clients). Each node can mine blocks and add them to its own local chain. When a block is mined, it is broadcast to other nodes in the network.

### WebSocket

WebSocket is used for real-time communication between nodes. When a block is mined, it is broadcast to all connected nodes. Each node can verify the validity of the blockchain and synchronize with others.

### Ethereum Integration

In addition to managing your own blockchain, this project allows you to interact with the Ethereum blockchain for transaction management, payments, or other blockchain-based applications.

## Example Usage

Here's how you can add blocks to your blockchain:

```javascript
let myCoin = new Blockchain();

console.log('Mining block 1...');
myCoin.addBlock(new Block(1, '10/07/2021', { amount: 4 }));

console.log('Mining block 2...');
myCoin.addBlock(new Block(2, '12/07/2021', { amount: 10 }));

console.log(JSON.stringify(myCoin, null, 4)); // Display the blockchain
console.log('Is blockchain valid?', myCoin.isChainValid()); // Check if the blockchain is valid
```

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
