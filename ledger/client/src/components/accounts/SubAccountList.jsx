import React, { useState, useEffect } from "react";
import { useAccountContext } from "../../context/AccountContext";

const SubAccountList = () => {
  const { accounts = [], subAccounts = [], classesData } = useAccountContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("AccountList");

  const getClassAccounts = (classId) => {
    return accounts.filter((account) => account.fk_class_id === classId);
  };

  const getSubAccounts = (accountId) => {
    return subAccounts.filter(
      (subAccount) => subAccount.fk_account_id === accountId
    );
  };

  const filteredAccounts = (accounts) => {
    return accounts.filter(
      (account) =>
        account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getSubAccounts(account.id).some((subAccount) =>
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
    <div className="panel mx-auto flex flex-col h-full">
      {/* Search */}
      <div className="relative mb-4 flex-none">
        <input
          type="text"
          placeholder="Search accounts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-pri rounded-2xl min-h-input max-h-input px-3 pr-12 py-2 focus:outline-none bg-sec text-pri transition-colors duration-300 focus:border-accent dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
        />
        <div className={`search-loading-icon ${searchLoading ? "" : "hidden"}`}>
          <i className="fa fa-spinner fa-spin text-sec dark:text-gray-300"></i>
        </div>
        <div className={`search-icon ${searchLoading ? "hidden" : ""}`}>
          <i className="fa fa-search text-sec dark:text-gray-300"></i>
        </div>
      </div>
    
      {/* List Container */}
      <div className="list-container thin-scrollbar border-pri bg-sec dark:border-gray-700 dark:bg-gray-800">
        {classesData.map((accountClass) => (
          <div key={accountClass.id} className="rounded-lg">
            <div className="account-header bg-gray-200 dark:bg-gray-700">
              <div className="account-title text-pri dark:text-gray-100">
                <span>{accountClass.id} -</span>
                <div>{accountClass.name}</div>
              </div>
              <div className="flex justify-end w-full text-sec dark:text-gray-400">
                {accountClass.master_account}
              </div>
            </div>
        
            {filteredAccounts(getClassAccounts(accountClass.id)).map(
              (account) => (
                <div key={account.id} className="account-item card">
                  <div className="account-item-header">
                    <div className="account-item-title text-pri dark:text-gray-200">
                      <span>{account.account_number} -</span>
                      <div>{account.name}</div>
                    </div>
                    <div className="flex-1 text-right text-sec dark:text-gray-400">
                      {account.master_account}
                    </div>
                  </div>
                  <ul className="subaccount-list">
                    {getSubAccounts(account.id).map((subAccount) => (
                      <li
                        key={subAccount.id}
                        className="subaccount-item text-sec dark:text-gray-300"
                      >
                        <div>
                          ({subAccount.account_number}) - {subAccount.name} - $
                          {subAccount.balance}
                        </div>
                        <div className="text-right text-sec dark:text-gray-400">
                          {subAccount.master_account}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubAccountList;