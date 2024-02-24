// AppRouter.js
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountList from "./accounts/AccountList";
import CreateEntries from "./entries/CreateEntries";
import CreateAccountForm from "./accounts/CreateAccountForm";
import MainAccounts from "./accounts/MainAccounts";
import { AccountProvider } from "../context/AccountContext";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AccountProvider>
              <MainAccounts />
            
            </AccountProvider>
          }
        />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/account-list" element={<AccountList />} />
        <Route path="/create-entry" element={<CreateEntries />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
