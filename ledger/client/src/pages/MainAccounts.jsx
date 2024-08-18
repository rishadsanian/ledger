import React, { useState } from "react";
import CreateAccountForm from "../components/accounts/CreateAccountForm";
import CreateSubAccount from "../components/accounts/CreateSubAccountForm";
import SubAccountList from "../components/accounts/SubAccountList";
import AccountDetail from "../components/accounts/AccountDetail";
import Drawer from "../components/Drawer";

const MainAccounts = () => {
  const [activeTab, setActiveTab] = useState("createAccount");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerTheme, setDrawerTheme] = useState("default");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-col justify-center w-full gap-6 h-full">
        {/* Header */}
        <div className="text-2xl flex justify-between items-center">
          <span>Accounts</span>
          <div className="flex gap-2 items-center">
            {/* Button to toggle the drawer */}
            <button
              onClick={toggleDrawer}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none"
            >
              {isDrawerOpen ? "Close Panel" : "Add Account"}
            </button>
          </div>
        </div>
  
        {/* Body */}
        <div className="flex flex-grow gap-6 sm:flex-row overflow-y-auto">
          {/* Left panel */}
          <div className="w-full lg:w-1/3">
            <SubAccountList />
          </div>
  
          {/* Detail panel */}
          <div className="w-full lg:w-2/3">
            <AccountDetail />
          </div>
        </div>
      </div>
  
      {/* Right panel (Drawer) */}
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} theme={drawerTheme}>
        {/* Toggle buttons */}
        <div className="border-b border-gray-300 mb-4">
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
  
        {/* Form content */}
        {activeTab === "createAccount" && <CreateAccountForm />}
        {activeTab === "createSubAccount" && <CreateSubAccount />}
      </Drawer>
    </div>
  );
  
};

export default MainAccounts;
