import React, { useState, useEffect } from "react";
import { useAccountContext } from "../../context/AccountContext";

const SubAccountList = () => {
  const { accounts = [], subAccounts = [], classesData } = useAccountContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

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
    <div className="container overflow-hidden mx-auto">
      {/* Search */}
      <div className="relative mb-6 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search accounts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-2xl min-h-[35px] max-h-[35px] px-3 pr-12 py-2 focus:outline-none bg-white text-gray-700 transition-colors duration-300 focus:border-blue-500"
        />
        <div
          className={`absolute right-0 top-0 pr-4 h-full w-12 text-gray-700 flex items-center justify-center ${
            searchLoading ? "" : "hidden"
          }`}
        >
          <i className="fa fa-spinner fa-spin"></i>
        </div>
        <div
          className={`absolute right-0 top-0 pr-3 h-full w-12 text-gray-700 flex items-center justify-center ${
            searchLoading ? "hidden" : ""
          }`}
        >
          <i className="fa fa-search"></i>
        </div>
      </div>
      {/* List */}
      <div className=" border-4  overflow-y-auto">
        {classesData.map((accountClass) => (
          <div
            key={accountClass.id}
            className=" mb-6 border border-gray-200 rounded-lg"
          >
            <div className="flex bg-gray-300 text-gray-500 justify-between items-center pr-4 ">
              <div className="flex  text-md pt-4 pb-4 text-gray-500 w-fullflex items-center space-x-2 text-2xl font-bold">
                <span>{accountClass.id} -</span>
                <div>{accountClass.name}</div>
              </div>
              <div className="flex-1 text-right text-gray-600 ">
                {accountClass.master_account}
              </div>
            </div>

            {filteredAccounts(getClassAccounts(accountClass.id)).map(
              (account) => (
                <div
                  key={account.id}
                  className="bg-white border-t p-4 shadow-sm "
                >
                  <div className="flex justify-between items-center pr-4 mb-2">
                    <div className="flex items-center space-x-2 text-xl font-semibold text-gray-700">
                      <span>{account.account_number} -</span>
                      <div>{account.name}</div>
                    </div>
                    <div className="flex-1 text-right text-gray-600">
                      {account.master_account}
                    </div>
                  </div>
                  <ul className="ml-6 list-disc">
                    {getSubAccounts(account.id).map((subAccount) => (
                      <li
                        key={subAccount.id}
                        className="text-sm text-gray-600 flex justify-between"
                      >
                        <div>
                          ({subAccount.account_number}) - {subAccount.name} - $
                          {subAccount.balance}
                        </div>
                        <div className="text-right text-gray-600">
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
