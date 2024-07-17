import React from "react";
import { useAccountContext } from "../../context/AccountContext";



const AccountList = () => {
  const { accounts = [], subAccounts = [], classesData = [] } = useAccountContext();


  // Filter accounts by class ID
  const balanceSheetAccounts = accounts.filter((account) =>
    [10, 20, 50].includes(account.fk_class_id)
  );

  const incomeStatementAccounts = accounts.filter((account) =>
    
    [30,40].includes(account.fk_class_id)    
  );
  return (
    
    <div className="pr-0 pt-0 h-1/2"> 
      {/* <pre>{JSON.stringify(balanceSheetAccounts, null, 2)}</pre> */}
      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Balance Sheet */}
        <div className="flex flex-col p-4 gap-3">
          <div className="text-xl font-semibold mb-4">Balance Sheet</div>
          {classesData
            .filter((classData) =>
              ["Assets", "Liabilities", "Equity"].includes(classData.name)
            )
            .map((accountClass) => (
              <div
                key={accountClass.id}
                className="bg-white w-full border rounded-lg p-4 shadow-md"
              >
                <div className="text-lg font-semibold pb-2 pl-1">
                  {accountClass.name}
                </div>
                <div className="overflow-y-auto mb-4">
                  <table className="ml-0 min-w-full divide-y divide-gray-200 border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Account No.
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
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {balanceSheetAccounts
                        .filter(
                          (account) =>
                            account.fk_class_id === accountClass.id
                        )
                        .map((account) => (
                          <tr key={account.id} className="border-t">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                              {account.account_number}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                              {account.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                              {account.account_type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                              ${account.balance}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
        </div>
        {/* Income Statement */}
        <div className="flex flex-col p-4 gap-3">
          <div className="text-xl font-semibold mb-4">Income Statement</div>
          {classesData
            .filter((classData) =>
              ["Revenue", "Expense"].includes(classData.name)
            )
            .map((accountClass) => (
              <div
                key={accountClass.id}
                className="bg-white w-full border rounded-lg p-4 shadow-md"
              >
                <div className="text-lg font-semibold pb-2 pr-4">
                  {accountClass.name}
                </div>
                <div className="overflow-y-auto mb-4">
                  <table className="ml-0 min-w-full divide-y divide-gray-200 border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Account No.
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
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {incomeStatementAccounts
                        .filter(
                          (account) =>
                            account.fk_class_id === accountClass.id
                        )
                        .map((account) => (
                          <tr key={account.id} className="border-t">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                              {account.account_number}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                              {account.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                              {account.account_type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                              ${account.balance}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
        </div>
      </div>

      
    </div>
  );
};

export default AccountList;
