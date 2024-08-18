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
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Account Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Account Name:</p>
          <p>{accountData.accountName}</p>
        </div>
        <div>
          <p className="font-semibold">Account Number:</p>
          <p>{accountData.accountNumber}</p>
        </div>
        <div>
          <p className="font-semibold">Account Type:</p>
          <p>{accountData.accountType}</p>
        </div>
        <div>
          <p className="font-semibold">Balance:</p>
          <p>{accountData.currency} {accountData.balance.toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold">Account Holder:</p>
          <p>{accountData.accountHolder}</p>
        </div>
        <div>
          <p className="font-semibold">Branch Name:</p>
          <p>{accountData.branchName}</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold">Branch Address:</p>
          <p>{accountData.branchAddress}</p>
        </div>
        <div>
          <p className="font-semibold">Date Opened:</p>
          <p>{accountData.dateOpened}</p>
        </div>
        <div>
          <p className="font-semibold">Last Transaction:</p>
          <p>{accountData.lastTransaction}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
