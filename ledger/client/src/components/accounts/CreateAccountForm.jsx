import React, { useState, useEffect } from "react";
import Axios from "axios";
import { TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { MdAddCircle } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useAccountContext } from "../../context/AccountContext";

import {
  Button,
  // Select,
  // MenuItem,
  // FormControl,
  // InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

//Account Types
const accountTypeOptions = ["Debit", "Credit"];

// classes -
const classesData = [
  { id: 10, name: "Assets" },
  { id: 20, name: "Liabilities" },
  { id: 30, name: "Revenue" },
  { id: 40, name: "Expense" },
  { id: 50, name: "Equity" },
];

function CreateAccount() {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  // const [balance, setBalance] = useState("");
  const [accountType, setAccountType] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const { updateAccounts } = useAccountContext();

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("isLoading:", isLoading);
  }, [isLoading]);


// const getAccounts = async () => {


  const saveAccount = async (e) => {
    e.preventDefault();

    const newAccount = {
      name,
      account_number: accountNumber,
      account_type: accountType,
      fk_class_id: selectedClass ? selectedClass.id : null,
      user_id: 1
    };

    try {
      // Set loading state to true
      setIsLoading(true);

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
      setIsLoading(false);
      //update accounts
      updateAccounts();
    } catch (error) {
      setIsLoading(false);
      // Handle errors, for example, show an error message
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full border-2 bg-white rounded justify-between shadow-md">
      <div className="flex justify-between items-center bg-gray-300 px-3">
        <div className="flex  text-md pt-4 pb-4 text-gray-500 w-full">
          Create New Account
        </div>
        <div className="text-gray-500 cursor-pointer p-1 ">
          <MdClose className="text-xl hover: text-gray-500 hover:scale-125 transition-transform" />
        </div>
      </div>

      <form onSubmit={saveAccount} class="px-4 py-4 text-sm ">
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

        {/* <FormControl component="fieldset">
          <Typography variant="subtitle1" gutterBottom>
            Account Type
          </Typography>
          <RadioGroup
            id="account-type-select"
            aria-label="account-type"
            name="account-type"
            value={accountType}
            style={{ flexDirection: "row" }}
          >
            {accountTypeOptions.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl> */}
        <div
          className={`flex justify-center items-center mt-6 ${
            isLoading ? "animate-spin" : ""
          }`}
        >
          <div class="w-full flex justify-center items-center">
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
