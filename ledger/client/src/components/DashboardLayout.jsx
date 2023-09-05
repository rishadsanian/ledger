// DashboardLayout.js
import React from 'react';
import CreateAccountForm from './CreateAccountForm';
import AccountList from './AccountList';

const DashboardLayout = () => {
  return (
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
  );
};

export default DashboardLayout;
