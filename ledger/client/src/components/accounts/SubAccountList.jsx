import React, { useState, useEffect } from "react";
import { useAccountContext } from "../../context/AccountContext";
import { classesData } from "./AccountList";

const SubAccountList = () => {
  const { accounts = [], subAccounts = [] } = useAccountContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const getClassAccounts = (classId) => {
    return accounts.filter(account => account.fk_class_id === classId);
  };

  const getSubAccounts = (accountId) => {
    return subAccounts.filter(subAccount => subAccount.fk_account_id === accountId);
  };

  const filteredAccounts = (accounts) => {
    return accounts.filter(account => 
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getSubAccounts(account.id).some(subAccount => 
        subAccount.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
      setSearchLoading(true);
      setTimeout(() => {
        setSearchLoading(false);
      }, 300);
    }, 300);

    return () => clearTimeout(debouncedSearch);
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-6">
      <div className="relative mb-6 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search accounts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-2xl min-h-[35px] max-h-[35px] px-3 pr-12 py-2 focus:outline-none bg-white text-gray-700 transition-colors duration-300 focus:border-blue-500"
        />
        <div
          className={`absolute right-0 top-0 pr-4 h-full w-12 text-gray-700 flex items-center justify-center ${searchLoading ? "" : "hidden"}`}
        >
          <i className="fa fa-spinner fa-spin"></i>
        </div>
        <div
          className={`absolute right-0 top-0 pr-3 h-full w-12 text-gray-700 flex items-center justify-center focus:outline-none ${searchLoading ? "hidden" : ""}`}
        >
          <i className="fa fa-search"></i>
        </div>
      </div>
      {classesData.map(accountClass => (
        <div key={accountClass.id} className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{accountClass.name}</h2>
          {filteredAccounts(getClassAccounts(accountClass.id)).map(account => (
            <div key={account.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
              <h3 className="text-xl font-semibold text-gray-700 pb-2">{account.name}</h3>
              <ul className="ml-4 list-disc">
                {getSubAccounts(account.id).map(subAccount => (
                  <li key={subAccount.id} className="text-sm text-gray-600">
                    {subAccount.name} ({subAccount.account_number}) - ${subAccount.balance}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SubAccountList;
