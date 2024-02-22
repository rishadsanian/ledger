// MainAccount.js
import React from "react";
import CreateAccountForm from "./CreateAccountForm";
import AccountList from "./AccountList";

const MainAccounts = () => {
  return (
    <div className="flex flex-col overflow-hidden "> 
      <div className="text-2xl mb-4 py-2 px-3"> Accounts</div>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen flex bg-gray-100">
        <div className="w-1/2  p-8">
          {/* <h2 className="text-2xl font-semibold mb-4">Create New Account</h2> */}
          <CreateAccountForm />
        </div>
        <div className="">
          {/* <h2 className="text-2xl font-semibold mb-4">Account List</h2> */}
          <AccountList />
        </div>
      </div>
    </div>
  );
};

export default MainAccounts;
