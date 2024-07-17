// CreateSubAccount.jsx
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { TextField, Select, MenuItem, Unstable_Grid2 } from "@mui/material";
import { MdAddCircle } from "react-icons/md";
import { useAccountContext } from "../../context/AccountContext";
function CreateSubAccount() {
  const {classesData = []} = useAccountContext();
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [parentAccount, setParentAccount] = useState("");
  const [parentAccounts, setParentAccounts] = useState([]);


  useEffect(() => {
    // Fetch parent accounts from the server
    const fetchParentAccounts = async () => {
      try {
        const response = await Axios.get("/api/accounts");
        setParentAccounts(response.data.accounts);
        console.log("Parent accounts:", response.data.accounts);
      } catch (error) {
        console.error("Error fetching parent accounts:", error);
      }
    };

    fetchParentAccounts();
  }, []);

  const saveSubAccount = async (e) => {
    e.preventDefault();

    const newSubAccount = {
      name,
      account_number: accountNumber,
      account_type: accountType,
      balance: 0,
      fk_account_id: parentAccount,
      fk_class_id: parentAccounts.find((account) => account.id === parentAccount).fk_class_id,
      fk_user_id: 1, // Assuming user_id 1 for demo purposes
    };

    try {
      const response = await Axios.post("/api/accounts/sub-accounts", newSubAccount);
      console.log("Sub-account created:", response.data.subAccount);

      // Reset form fields after successful creation
      setName("");
      setAccountNumber("");
      setAccountType("");
      setParentAccount("");
    } catch (error) {
      console.error("Error creating sub-account:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full border-2 bg-white rounded justify-between shadow-md">
      <div className="flex justify-between items-center bg-gray-300 px-3">
        <div className="flex text-md pt-4 pb-4 text-gray-500 w-full">
          Create Sub-Account
        </div>
      </div>

      <form onSubmit={saveSubAccount} className="px-4 py-4 text-sm">
        <div className="flex flex-col gap-4">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
            fullWidth
          />
          <Select
            label="Account Type"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            required
            fullWidth
          >
            <MenuItem value="">Select Account Type</MenuItem>
            <MenuItem value="Debit">Debit</MenuItem>
            <MenuItem value="Credit">Credit</MenuItem>
          </Select>
          <Select
            value={parentAccount}
            onChange={(e) => setParentAccount(e.target.value)}
            required
            fullWidth
          >
            <MenuItem value="">Select Parent Account</MenuItem>
            {parentAccounts.map((account) => (
              <MenuItem key={account.id} value={account.id}>
                {account.name}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="w-full flex justify-center items-center">
            <MdAddCircle
              className="text-5xl text-gray-400 cursor-pointer hover:scale-125 transition-transform"
              onClick={saveSubAccount}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateSubAccount;
