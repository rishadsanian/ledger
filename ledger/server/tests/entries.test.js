const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

// Fake in-memory store for transactions
const transactions = [];

const queryStub = sinon.stub().callsFake(async (query, values) => {
  if (/INSERT INTO transactions/i.test(query)) {
    const row = {
      account_number: values[0],
      sub_account_number: values[1],
      fk_user_id: values[2],
      amount: values[3],
      timestamp: values[4],
      reference: values[5],
      note: values[6],
      transaction_id: values[7],
    };
    transactions.push(row);
    return { rows: [row] };
  }
  return { rows: [] };
});

const transactionServiceStub = {
  createTransactionWithBlockchain: sinon.stub().resolves(),
  getEntriesByPeriod: sinon.stub().resolves([]),
};

const entriesController = proxyquire('../controllers/entriesController', {
  '../db/config': { query: queryStub },
  '../services/transactionService': transactionServiceStub,
});

describe('entriesController.getEntriesByPeriod', () => {
  beforeEach(() => {
    transactionServiceStub.getEntriesByPeriod.resetHistory();
  });

  it('retrieves recent entries', async () => {
    const fakeEntries = [{ id: 1 }, { id: 2 }, { id: 3 }];
    transactionServiceStub.getEntriesByPeriod.resolves(fakeEntries);

    const req = { query: { period: '3' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await entriesController.getEntriesByPeriod(req, res);

    expect(transactionServiceStub.getEntriesByPeriod.calledWith(3)).to.be.true;
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.firstCall.args[0].entries).to.have.length(3);
  });
});

describe('entriesController.createEntry', () => {
  beforeEach(() => {
    transactions.length = 0;
    queryStub.resetHistory();
    transactionServiceStub.createTransactionWithBlockchain.resetHistory();
    transactionServiceStub.getEntriesByPeriod.resetHistory();
  });

  it('stores entries and ensures debit/credit balance', async () => {
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    const debitReq = {
      body: {
        account_number: '1001',
        sub_account_number: '100101',
        fk_user_id: 1,
        amount: 100,
        timestamp: new Date(),
        reference: 'debit',
        note: 'debit entry',
        transaction_id: 1,
      },
    };

    await entriesController.createEntry(debitReq, res);

    const creditReq = {
      body: {
        account_number: '2001',
        sub_account_number: '200101',
        fk_user_id: 1,
        amount: -100,
        timestamp: new Date(),
        reference: 'credit',
        note: 'credit entry',
        transaction_id: 1,
      },
    };

    await entriesController.createEntry(creditReq, res);

    const total = transactions
      .filter((t) => t.transaction_id === 1)
      .reduce((sum, t) => sum + Number(t.amount), 0);

    expect(total).to.equal(0);
    expect(queryStub.callCount).to.equal(2);
    expect(res.status.calledWith(201)).to.be.true;
    expect(transactionServiceStub.createTransactionWithBlockchain.callCount).to.equal(2);
  });
});
