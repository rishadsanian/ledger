import React, { useState, useEffect } from "react";

import { useAccountContext } from "../../context/AccountContext";
import SearchBar from "../../assets/searchBar";
const classesData = [
  { id: 10, name: "Assets" },
  { id: 20, name: "Liabilities" },
  { id: 30, name: "Revenue" },
  { id: 40, name: "Expense" },
  { id: 50, name: "Equity" },
];
function AccountList() {
  const { accounts } = useAccountContext();
  const [listModel, setListModel] = useState(accounts);

  useEffect(() => {
    setListModel(accounts);
  }, [listModel]);

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
              <th className="px-4 py-2">Class</th>
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
     
                <td className="border px-4 py-2">{classesData.find((data) => data.id == account.fk_class_id)?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountList;
