# Backend Blockchain Integration Hooks

This project supports optional interaction with the blockchain layer. The main server
remains decoupled through a service layer and can run without the blockchain
module present.

## Environment Toggle
Set `USE_BLOCKCHAIN=true` in the server environment to enable calls to the blockchain service.

## Service API
`server/services/blockchainService.js` exposes the following asynchronous method:

- `recordTransaction(transaction)` – Accepts the persisted transaction object and
  records it on the blockchain. The default implementation is a stub and simply
  resolves the promise.

Additional hooks can be added here as blockchain features grow (for example,
`verifyTransaction` or `getTransactionStatus`).

## Usage
`server/services/transactionService.js` calls `recordTransaction` when
`USE_BLOCKCHAIN` is enabled. Controllers should use
`transactionService.createTransactionWithBlockchain` instead of direct database
access so that blockchain functionality can be integrated transparently.
