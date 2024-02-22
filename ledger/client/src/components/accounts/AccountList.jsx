import React, { useState, useEffect } from "react";

import { useAccountContext } from "../../context/AccountContext";
import SearchBar from "../../assets/searchBar";

function AccountList() {
  const { accounts } = useAccountContext();
  const [listModel, setListModel] = useState(accounts);

  useEffect(() => {
    setListModel(accounts);
  }, [accounts]);

  useEffect(() => {
    console.log("Accounts:", accounts);
  }, [accounts]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="text-2xl font-semibold mb-4">Account List</div>
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <SearchBar model={listModel} setModel={setListModel} modelMain={accounts} />
        </div>
        <div className="flex justify-between items-center mb-4"></div>
        <div className="flex justify-between items-center mb-4"></div>
        <table className="w-full mx-auto">
          <thead>
            <tr className="bg-gray-800 text-sm">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Account Number</th>
              <th className="px-4 py-2">Account Type</th>
              <th className="px-4 py-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {listModel.map((account) => (
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
