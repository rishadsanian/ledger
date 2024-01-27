// AccountContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);

  const getAccounts = async () => {
    try {
      const response = await axios.get('/api/accounts');
      setAccounts(response.data.accounts);
      console.log('Account Data Retrieved');
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const updateAccounts = async () => {
    await getAccounts();
  };

  return (
    <AccountContext.Provider value={{ accounts, updateAccounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  return useContext(AccountContext);
};
