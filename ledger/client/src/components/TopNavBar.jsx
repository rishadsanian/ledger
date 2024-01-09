// TopNavbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const TopNavbar = () => {
  return (
    <AppBar position="static" className="-ml-6" >
      <Toolbar className="flex justify-between">
        <div>
          <img
            src="https://github.com/rishadsanian/ledger/assets/77033627/10290488-d4ea-4b3c-bd1d-f8b4e7d078ba  "
            alt="ledger"
          />
        </div>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
