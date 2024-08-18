import React, { useState } from "react";
import CreateAccountForm from "../components/accounts/CreateAccountForm";
import AccountList from "../components/accounts/AccountList";
import CreateEntries from "../components/entries/CreateEntries";
import CreateSubAccount from "../components/accounts/CreateSubAccountForm";
import SubAccountList from "../components/accounts/SubAccountList";

const MainAccounts = () => {
  const [activeTab, setActiveTab] = useState("createAccount");

  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="col-span-1">
        <div className="text-2xl mb-6">Accounts</div>
        <div class="w-full lg:w-1/3">
          <SubAccountList />
        </div>
      </div>
      <div className="py-32">
        <div className="m-4">
          <button
            className={`mr-4 py-2 px-4 rounded-lg focus:outline-none ${
              activeTab === "createAccount"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveTab("createAccount")}
          >
            Create Account
          </button>
          <button
            className={`py-2 px-4 rounded-lg focus:outline-none ${
              activeTab === "createSubAccount"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveTab("createSubAccount")}
          >
            Create Sub Account
          </button>
        </div>
        <div></div>
        {activeTab === "createAccount" && <CreateAccountForm />}
        {activeTab === "createSubAccount" && <CreateSubAccount />}
      </div>
    </div>
  );
};

export default MainAccounts;
