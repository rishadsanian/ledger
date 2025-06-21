const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

let accounts = [];
let subAccounts = [];

const queryStub = sinon.stub().callsFake(async (query, values) => {
  if (/INSERT INTO accounts/i.test(query)) {
    const account = { id: accounts.length + 1, ...valuesToAccount(values) };
    accounts.push(account);
    return { rows: [], rowCount: 1 };
  }
  if (/SELECT \* FROM accounts/i.test(query)) {
    return { rows: accounts };
  }
  if (/UPDATE accounts/i.test(query)) {
    const id = values[5];
    const idx = accounts.findIndex((a) => a.id === id);
    if (idx === -1) return { rowCount: 0 };
    accounts[idx] = { ...accounts[idx], ...valuesToAccount(values) };
    return { rowCount: 1 };
  }
  if (/SELECT \* FROM sub_accounts WHERE fk_account_id =/i.test(query)) {
    const id = values[0];
    return { rows: subAccounts.filter((s) => s.fk_account_id === id) };
  }
  if (/SELECT \* FROM sub_accounts;/i.test(query)) {
    return { rows: subAccounts };
  }
  if (/INSERT INTO sub_accounts/i.test(query)) {
    const sub = { id: subAccounts.length + 1, ...valuesToSub(values) };
    subAccounts.push(sub);
    return { rows: [], rowCount: 1 };
  }
  return { rows: [] };
});

function valuesToAccount(values) {
  return {
    name: values[0],
    account_number: values[1],
    account_type: values[2],
    fk_class_id: values[3],
    fk_user_id: values[4],
    master_account: `${values[3]}-${values[1]}-0000`,
  };
}

function valuesToSub(values) {
  return {
    name: values[0],
    account_number: values[1],
    account_type: values[2],
    fk_account_id: values[3],
    fk_class_id: values[4],
    fk_user_id: values[5],
    master_account: `${values[4]}-${accounts.find(a=>a.id===values[3]).account_number}-${values[1]}`,
  };
}

const accountController = proxyquire('../controllers/accountController', {
  '../db/config': { query: queryStub },
});

describe('accountController CRUD', () => {
  beforeEach(() => {
    accounts = [];
    subAccounts = [];
    queryStub.resetHistory();
  });

  it('creates and retrieves accounts', async () => {
    const req = { body: { name: 'Cash', account_number: '1001', account_type: 'Debit', fk_class_id: 10, fk_user_id: 1 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    await accountController.createAccount(req, res);
    expect(res.status.calledWith(201)).to.be.true;

    const getRes = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    await accountController.getAllAccounts({}, getRes);
    expect(getRes.json.firstCall.args[0].accounts).to.have.length(1);
  });

  it('updates an existing account', async () => {
    const req = { body: { name: 'Cash', account_number: '1001', account_type: 'Debit', fk_class_id: 10, fk_user_id: 1 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    await accountController.createAccount(req, res);

    const updateRes = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const updateReq = { params: { id: 1 }, body: { name: 'Petty Cash', account_number: '1001', account_type: 'Debit', fk_class_id: 10, fk_user_id: 1 } };
    await accountController.editAccount(updateReq, updateRes);
    expect(updateRes.status.calledWith(200)).to.be.true;
  });

  it('creates and retrieves sub-accounts', async () => {
    // create parent account first
    const req = { body: { name: 'Cash', account_number: '1001', account_type: 'Debit', fk_class_id: 10, fk_user_id: 1 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    await accountController.createAccount(req, res);

    const subReq = { body: { name: 'Petty', account_number: '01', account_type: 'Debit', fk_account_id: 1, fk_class_id: 10, fk_user_id: 1 } };
    const subRes = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    await accountController.createSubAccount(subReq, subRes);
    expect(subRes.status.calledWith(201)).to.be.true;

    const listRes = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const listReq = { params: { id: 1 } };
    await accountController.getAllSubAccountsByParentAccountId(listReq, listRes);
    expect(listRes.json.firstCall.args[0].subAccounts).to.have.length(1);
  });
});
