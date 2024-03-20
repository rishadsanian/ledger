// AccountContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [subAccounts, setSubAccounts] = useState([]);

  const getAccounts = async () => {
    try {
      const response = await axios.get("/api/accounts");
      setAccounts(response.data.accounts);
      console.log("Account Data Retrieved", response.data.accounts);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const getSubAccounts = async () => {
    try {
      const response = await axios.get("/api/accounts/sub-accounts");
      setSubAccounts(response.data.subAccounts);
      console.log("Sub-Account Data Retrieved:", response.data.subAccounts);
    } catch (error) {
      console.error("Error fetching sub-accounts:", error);
    }
  };

  useEffect(() => {
    getAccounts();
    getSubAccounts(); // Fetch sub-accounts when component mounts
  }, []);

  const updateAccounts = async () => {
    getAccounts(); // Only fetch accounts
    getSubAccounts();
  };

  return (
    <AccountContext.Provider value={{ accounts, subAccounts, updateAccounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  return useContext(AccountContext);
};
