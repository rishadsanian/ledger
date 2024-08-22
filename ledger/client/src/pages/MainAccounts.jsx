import React, { useState } from "react";
import CreateAccountForm from "../components/accounts/CreateAccountForm";
import CreateSubAccount from "../components/accounts/CreateSubAccountForm";
import SubAccountList from "../components/accounts/SubAccountList";
import AccountDetail from "../components/accounts/AccountDetail";
import Drawer from "../components/Drawer";

const MainAccounts = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [IsDrawer2Open, setIsDrawer2Open] = useState(false);
  const [drawerTheme, setDrawerTheme] = useState("default");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const toggleDrawer2 = () => {
    setIsDrawer2Open(!IsDrawer2Open);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-col justify-center w-full gap-6 h-full">
        {/* Header */}
        <div className="flex justify-between items-center ">
          <span className="text-xl sm:text-3xl">Accounts</span>
          <div className="flex gap-2 items-center">
            {/* Buttons for toggling drawers */}
            <button
              onClick={() => {
                setActiveTab("createAccount");
                toggleDrawer();
              }}
              className="bg-slate-700 text-white py-2 px-4 rounded-lg focus:outline-none"
            >
              Create Account 1
            </button>
            {/* 
            <button
              onClick={() => {
                setActiveTab("createAccount");
                toggleDrawer2();
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none"
            >

              Create Account 2
            </button>
             */}
            <button
              onClick={() => {
                setActiveTab("createSubAccount");
                toggleDrawer();
              }}
              className="bg-slate-700 text-white py-2 px-4 rounded-lg focus:outline-none"
            >
              Create Sub Account 1
            </button>
            {/* 
            <button
              onClick={() => {
                setActiveTab("createSubAccount");
                toggleDrawer2();
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none"
            >
              Create Sub Account 2
            </button>
             */}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-grow gap-6 sm:flex-row overflow-y-auto">
          {/* Left panel */}
          <div className="w-full lg:w-1/3">
            <SubAccountList />
          </div>

          {/* Detail panel */}
          <div className="w-full lg:w-2/3">
            <AccountDetail />
          </div>
        </div>

        {/* Slide inline drawer 2         <div
          className={`fixed right-0 h-full w-full bg-white lg:w-1/2 xl:w-1/3 shadow-lg transform transition-transform duration-300 ease-in-out ${
            IsDrawer2Open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleDrawer2}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none"
          >
            Close Panel
          </button>
*/}

        {/* Form content for Drawer 2 
          {activeTab === "createAccount" && <CreateAccountForm />}
          {activeTab === "createSubAccount" && <CreateSubAccount />}
          
        </div>
        */}
      </div>

      {/* Right panel (Drawer) */}
      {(
      <div>
        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} theme={drawerTheme}>
          {/* Form content for Drawer 1 */}
          {activeTab === "createAccount" && <CreateAccountForm />}
          {activeTab === "createSubAccount" && <CreateSubAccount />}
        </Drawer>
      </div>
      )}
    </div>
  );
};

export default MainAccounts;
