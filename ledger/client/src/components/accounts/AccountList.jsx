// AccountList.js
import React, { useEffect } from 'react';
import { useAccountContext } from "../../context/AccountContext";

function AccountList() {
  const { accounts } = useAccountContext();

  useEffect(() => {
    console.log('Accounts:', accounts);
  }, [accounts]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-2xl font-semibold mb-4">Account List</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Account Number</th>
              <th className="px-4 py-2">Account Type</th>
              <th className="px-4 py-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id} className="text-center">
                <td className="border px-4 py-2">{account.id}</td>
                <td className="border px-4 py-2">{account.name}</td>
                <td className="border px-4 py-2">{account.account_number}</td>
                <td className="border px-4 py-2">{account.account_type}</td>
                <td className="border px-4 py-2">{account.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountList;
