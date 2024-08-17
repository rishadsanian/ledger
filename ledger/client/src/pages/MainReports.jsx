import React, { useState } from "react";
import AccountList from "../components/accounts/AccountList";

const MainAccounts = () => {

  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="col-span-1">
        <div className="text-2xl mb-4 py-2 px-3">Accounts</div>
        <div className="p-8">
          <AccountList />
        </div>
      </div>
      
    </div>
  );
};

export default MainAccounts;
