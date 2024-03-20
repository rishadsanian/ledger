import React, { useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
import AccountList from "./AccountList";
import CreateEntries from "../entries/CreateEntries";
import CreateSubAccount from "./CreateSubAccountForm";
import SubAccountList from "./SubAccountList";


const MainAccounts = () => {
  const [activeTab, setActiveTab] = useState("createAccount");

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <SubAccountList />
        <div className="text-2xl mb-4 py-2 px-3">Accounts</div>
        <div className="p-8">
          <AccountList />
        </div>
      </div>
      <div className="col-span-1">
        <div className="p-8">
          <div className="mb-4">
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
    </div>
  );
};

export default MainAccounts;
