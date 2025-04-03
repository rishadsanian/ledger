import React from 'react';

const AccountDetail = () => {
  // Mock account data
  const accountData = {
    accountName: "Mock Account",
    accountNumber: "1234567890",
    accountType: "Checking",
    balance: 1000,
    currency: "USD",
    accountHolder: "John Doe",
    branchName: "Main Branch",
    branchAddress: "123 Main St, City, Country",
    dateOpened: "2020-01-15",
    lastTransaction: "2024-08-10",
  };

  return (
    <div className="panel">
      <h2 className="text-2xl font-bold mb-4">Account Details</h2>
      <div className="grid-layout-2">
        <div>
          <label className="label">Account Name:</label>
          <p>{accountData.accountName}</p>
        </div>
        <div>
          <label className="label">Account   Number:</label>
          <p>{accountData.accountNumber}</p>
        </div>
        <div>
          <label className="label">Account Type:</label>
          <p>{accountData.accountType}</p>
        </div>
        <div>
          <label className="label">Balance:</label>
          <p>{accountData.currency} {accountData.balance.toLocaleString()}</p>
        </div>
        <div>
          <label className="label">Account Holder:</label>
          <p>{accountData.accountHolder}</p>
        </div>
        <div>
          <label className="label">Branch Name:</label>
          <p>{accountData.branchName}</p>
        </div>
        <div className="col-span-2">
          <label className="label">Branch Address:</label>
          <p>{accountData.branchAddress}</p>
        </div>
        <div>
          <label className="label">Date Opened:</label>
          <p>{accountData.dateOpened}</p>
        </div>
        <div>
          <label className="label">Last Transaction:</label>
          <p>{accountData.lastTransaction}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
