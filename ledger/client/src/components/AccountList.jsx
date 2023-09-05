import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AccountList() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch accounts data from your API endpoint using Axios
    axios.get('/api/accounts')
      .then((response) => {
        setAccounts(response.data.accounts);
        console.log("Account Data Retrieved");
      })
      .catch((error) => {
        console.error('Error fetching accounts:', error);
      });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h1 className="text-2xl font-semibold mb-4">Account List</h1>
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
