import React from "react";
import { useAccountContext } from "../../context/AccountContext";
import { MdClose } from "react-icons/md";

const classesData = [
  { id: 10, name: "Assets" },
  { id: 20, name: "Liabilities" },
  { id: 30, name: "Revenue" },
  { id: 40, name: "Expense" },
  { id: 50, name: "Equity" },
];

const AccountList = () => {
  const { accounts = [], subAccounts = [] } = useAccountContext();

  console.log(accounts); // Displaying the accounts object

  return (
    <div className="pr-0 pt-0 h-1/2">
      {/* Body */}
      <div>
        {/* Loop through each account class */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {classesData.map((accountClass) => (
            <div key={accountClass.id} className="flex flex-col gap-3">
              {/* Card for each account class */}
              <div className="bg-white w-full border rounded-lg p-4 shadow-md">
                <div className="flex flex-row  gap-2">
                  <div className="text-lg font-semibold">{accountClass.id}</div>
                  <div className="text-lg font-semibold">
                    {accountClass.name}
                  </div>
                </div>
                {/* Main table for accounts */}
                <div className="overflow-y-auto mb-4">
                  <table className="ml-0 min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Account Number
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Account Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Balance
                        </th>
                      </tr>
                    </thead>

                    <thead className="bg-white divide-y divide-gray-200">
                      {/* Loop through accounts within this class */}

                      {accounts
                        .filter((account) => {
                          return account.fk_class_id == accountClass.id;
                        })
                        .map((account) => (
                          <tr key={account.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {account.account_number}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {account.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {account.account_type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {account.balance}
                            </td>
                          </tr>
                        ))}
                    </thead>
                  </table>
                </div>
                {/* Sub-accounts table */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountList;
