import React, { useState } from "react";
import CreateAccountForm from "../components/accounts/CreateAccountForm";
import CreateSubAccount from "../components/accounts/CreateSubAccountForm";
import SubAccountList from "../components/accounts/SubAccountList";
import AccountDetail from "../components/accounts/AccountDetail";
import Drawer from "../components/Drawer";
import AccountList from "../components/accounts/AccountList";

const MainAccounts = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerTheme, setDrawerTheme] = useState("default");

  const toggleDrawer = (tab) => {
    setActiveTab(tab);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h1 className="heading-1 text-brand dark:text-gray-100">Accounts</h1>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => toggleDrawer("createAccount")}
              className="btn-primary"
            >
              Create Account
            </button>
            <button
              onClick={() => toggleDrawer("createSubAccount")}
              className="btn-primary"
            >
              Create Sub Account
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-4 p-4 bg-pri dark:bg-gray-900 flex-grow overflow-y-auto">
         
          {/* Left panel - SubAccountList */}
          <div className="w-full lg:w-1/3">
            <SubAccountList />
          </div>

          {/* Right panel - AccountDetail */}
          <div className="w-full lg:w-2/3">
            
            <AccountDetail />
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} theme={drawerTheme}>
        {activeTab === "createAccount" && <CreateAccountForm onSuccess={closeDrawer} />}
        {activeTab === "createSubAccount" && <CreateSubAccount onSuccess={closeDrawer} />}
      </Drawer>
    </div>
  );
};

export default MainAccounts;