import React, { useState } from "react";
import Axios from "axios";
import { TextField } from "@mui/material";
import {
  Button,
  // Select,
  // MenuItem,
  // FormControl,
  // InputLabel,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

//Account Types
const accountTypeOptions = ["Debit", "Credit"];

// classes
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
  // const [balance, setBalance] = useState("");
  const [accountType, setAccountType] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAccount = {
      name,
      account_number: accountNumber,
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
      // setBalance("");
      setAccountType("");
      setSelectedClass(null);
    } catch (error) {
      // Handle errors, for example, show an error message
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl pt-2 pb-4 bg-gray-900 text-white w-full">Create New Account</div>

      <div className="text-white ">
        <i className="fas fa-times"></i>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="flex flex-col gap-4">
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          // class="w-full "
        />
        
        <TextField
          label="Account Number"
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
          fullWidth
        />

        <Autocomplete
          id="account-type-select"
          options={accountTypeOptions}
          value={accountType}
          onChange={(event, newValue) => setAccountType(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Account Type" fullWidth />
          )}
        />

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
        </div>
        <div className="mt-8">
        <Button
          type="submit"
          variant="contained"
          color="tertiary"
          className="buttons formwrapper"
          style={{ color: 'background' }}
        >
          Create Account
        </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
