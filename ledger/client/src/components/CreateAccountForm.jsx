import React, { useState } from "react";
import Axios from "axios";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

// classesData.js
const classesData = [
  { id: 1, name: "Assets" },
  { id: 2, name: "Liabilities" },
  { id: 3, name: "Revenue" },
  { id: 4, name: "Expense" },
  { id: 5, name: "Equity" },
];

function CreateAccount() {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");
  const [accountType, setAccountType] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newAccount = {
      name,
      account_number: accountNumber,
      balance,
      account_type: accountType,
      fk_class_id: selectedClass ? selectedClass.id : null,
    };

    try {
      // Send a POST request to create the account
      const response = await Axios.post("/api/accounts", newAccount);

      // Handle the response here, for example, show a success message
      console.log("Account created:", response.data.account);

      // Reset the form fields
      setName("");
      setAccountNumber("");
      setBalance("");
      setAccountType("");
      setSelectedClass(null);
    } catch (error) {
      // Handle errors, for example, show an error message
      console.error("Error creating account:", error);
    }
  };

  return (
    <div>
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Account Number"
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Balance"
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          required
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Account Type</InputLabel>
          <Select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            required
          >
            <MenuItem value="">Select Account Type</MenuItem>
            <MenuItem value="Debit">Debit</MenuItem>
            <MenuItem value="Credit">Credit</MenuItem>
          </Select>
        </FormControl>
        <Autocomplete
          id="class-select"
          options={classesData}
          getOptionLabel={(option) => option.name}
          value={selectedClass}
          onChange={(event, newValue) => setSelectedClass(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Select Class" fullWidth />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default CreateAccount;
