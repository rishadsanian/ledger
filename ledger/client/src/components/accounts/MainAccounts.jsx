// MainAccount.js
import React from "react";
import CreateAccountForm from "./CreateAccountForm";
import AccountList from "./AccountList";

const MainAccounts = () => {
  return (
    <div className="flex flex-col "> 
      <div className="text-5xl mb-4 py-2 px-3"> Accounts</div>
      <div className="bg-gray-100 min-h-screen flex">
        <div className="w-1/2 bg-white p-8">
          {/* <h2 className="text-2xl font-semibold mb-4">Create New Account</h2> */}
          <CreateAccountForm />
        </div>
        <div className="w-1/2 p-8">
          {/* <h2 className="text-2xl font-semibold mb-4">Account List</h2> */}
          <AccountList />
        </div>
      </div>
    </div>
  );
};

export default MainAccounts;
