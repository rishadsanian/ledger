import React, { useState } from "react";
import Axios from "axios";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import { MdAddCircle } from "react-icons/md";
import { MdClose } from "react-icons/md";

function CreateAccount() {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");

  const saveAccount = async (e) => {
    e.preventDefault();

    const newAccount = {
      name,
      account_number: accountNumber,
      account_type: accountType,
      user_id: 1, // Assuming user_id 1 for demo purposes
    };

    try {
      const response = await Axios.post("/api/accounts", newAccount);
      console.log("Account created:", response.data.account);

      // Reset form fields after successful creation
      setName("");
      setAccountNumber("");
      setAccountType("");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full border-2 bg-white rounded justify-between shadow-md">
      <div className="flex justify-between items-center bg-gray-300 px-3">
        <div className="flex text-md pt-4 pb-4 text-gray-500 w-full">
          Create Account
        </div>
        <div className="text-gray-500 cursor-pointer p-1 ">
          <MdClose className="text-xl hover:text-gray-500 hover:scale-125 transition-transform" />
        </div>
      </div>

      <form onSubmit={saveAccount} className="px-4 py-4 text-sm">
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Account Number"
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
        <Select
          label="Account Type"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          required
        >
          <MenuItem value="Debit">Debit</MenuItem>
          <MenuItem value="Credit">Credit</MenuItem>
        </Select>
        <div className="flex justify-center items-center mt-6">
          <div className="w-full flex justify-center items-center">
            <MdAddCircle
              className="text-5xl text-gray-400 cursor-pointer hover:scale-125 transition-transform"
              onClick={saveAccount}
            />
          </div>
        </div>
      </form>
    </div>
  
  
  
  
  );
}

export default CreateAccount;
