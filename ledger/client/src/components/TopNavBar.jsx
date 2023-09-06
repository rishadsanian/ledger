// TopNavbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const TopNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <img
      src="https://github.com/rishadsanian/ledger/blob/main/logos/logoBlue.png?raw=true "
      alt="ledger"
    />
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
