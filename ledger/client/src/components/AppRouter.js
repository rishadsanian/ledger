// AppRouter.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountList from './accounts/AccountList';
import CreateAccountForm from './accounts/CreateAccountForm';
import MainAccounts from './accounts/MainAccounts';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainAccounts />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/account-list" element={<AccountList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
