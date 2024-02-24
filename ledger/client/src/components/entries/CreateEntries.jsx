import React, { useState, useEffect } from "react";
import Axios from "axios";
import { TextField, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { MdAddCircle } from "react-icons/md";
import { MdClose } from "react-icons/md";





function CreateEntries() {
  const [accountNumber, setAccountNumber] = useState("");
  const [subAccountNumber, setSubAccountNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [reference, setReference] = useState("");
  const [note, setNote] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("isLoading:", isLoading);
  }, [isLoading]);
  
  const saveAccount = async (e) => {




    
    e.preventDefault();

    const newEntry = {
      account_number: accountNumber,
      sub_account_number: subAccountNumber,
      user_id: userId,
      amount,
      timestamp,
      reference,
      note,
      transaction_id: transactionId,
    };

    try {
      const response = await Axios.post("/api/entries", newEntry);
      console.log("Entry created:", response.data.transaction);
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  return (



    <div className="flex flex-col gap-3 w-full border-2 bg-white rounded justify-between shadow-md">
    <div className="flex justify-between items-center bg-gray-300 px-3">
      <div className="flex  text-md pt-4 pb-4 text-gray-500 w-full">
        Journal Entry
      </div>
      <div className="text-gray-500 cursor-pointer p-1 ">
        <MdClose className="text-xl hover: text-gray-500 hover:scale-125 transition-transform" />
      </div>
    </div>




    
    <form onSubmit={saveAccount}  class="px-4 py-4 text-sm" >
       <div class="flex flex-col gap-4">
      <TextField
        label="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Sub Account Number"
        value={subAccountNumber}
        onChange={(e) => setSubAccountNumber(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Timestamp"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Reference"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Transaction ID"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        required
        fullWidth
      />
      </div>
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

export default CreateEntries;