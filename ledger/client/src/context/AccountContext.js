import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [subAccounts, setSubAccounts] = useState([]);
  const [classesData, setClassesData] = useState([]);

  const fetchData = async (url, setter, description) => {
    try {
      const response = await axios.get(url);
      setter(response.data);
      console.log(`${description} Data Retrieved:`, response.data);
    } catch (error) {
      console.error(`Error fetching ${description.toLowerCase()}:`, error);
    }
  };

  useEffect(() => {
    fetchData("/api/accounts/classes", (data) => setClassesData(data.classes), "Classes");
    fetchData("/api/accounts", (data) => setAccounts(data.accounts), "Accounts");
    fetchData("/api/accounts/sub-accounts", (data) => setSubAccounts(data.subAccounts), "Sub-Account");
  }, []);

  const updateAccounts = async () => {
    fetchData("/api/accounts/classes", (data) => setClassesData(data.classes), "Classes");
    fetchData("/api/accounts", (data) => setAccounts(data.accounts), "Accounts");
    fetchData("/api/accounts/sub-accounts", (data) => setSubAccounts(data.subAccounts), "Sub-Account");
  };

  return (
    <AccountContext.Provider value={{ accounts, subAccounts, classesData, updateAccounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => useContext(AccountContext);
