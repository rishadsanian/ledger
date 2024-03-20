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

const SubAccountList = () => {
  const { accounts = [], subAccounts = [] } = useAccountContext();

  console.log(accounts); // Displaying the accounts object

  return (
    <div className="pr-0 pt-0 h-1/2">
      {/* Body */}
      <div>
        <div>
          {classesData.map((accountClass) => (
            <div key={accountClass.id} className="">
              {accountClass.id}
              {accountClass.name}
            </div>
          ))}
        </div>
        {/* Show all accounts */}
        {accounts.map((account) => (
          <div key={account.id}>
            {account.number}
            {account.name}
          </div>
        ))}
        <div>
          {/* Create a way to show sub accounts here */}
          {subAccounts.map((subAccount) => (
            <div key={subAccount.id}>
              {/* Insert the asset class here */}
              {
                accounts.find(
                  (account) => account.id === subAccount.fk_account_id
                )?.fk_class_id
              }
              -{/*  */}
              {accounts.find((account)=>account.id === subAccount.fk_account_id)?.account_number}-
              {subAccount.account_number}
              00 -{subAccount.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubAccountList;
