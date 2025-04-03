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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Account Name:</label>
          <p>{accountData.accountName}</p>
        </div>
        <div>
          <label className="font-semibold">Account   Number:</label>
          <p>{accountData.accountNumber}</p>
        </div>
        <div>
          <label className="font-semibold">Account Type:</label>
          <p>{accountData.accountType}</p>
        </div>
        <div>
          <label className="font-semibold">Balance:</label>
          <p>{accountData.currency} {accountData.balance.toLocaleString()}</p>
        </div>
        <div>
          <label className="font-semibold">Account Holder:</label>
          <p>{accountData.accountHolder}</p>
        </div>
        <div>
          <label className="font-semibold">Branch Name:</label>
          <p>{accountData.branchName}</p>
        </div>
        <div className="col-span-2">
          <label className="font-semibold">Branch Address:</label>
          <p>{accountData.branchAddress}</p>
        </div>
        <div>
          <label className="font-semibold">Date Opened:</label>
          <p>{accountData.dateOpened}</p>
        </div>
        <div>
          <label className="font-semibold">Last Transaction:</label>
          <p>{accountData.lastTransaction}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
