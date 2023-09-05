// AppRouter.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import CreateAccountForm from './CreateAccountForm';
import AccountList from './AccountList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/account-list" element={<AccountList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
