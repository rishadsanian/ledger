import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SearchBarNav from '../assets/searchBarNav';

const TopNavbar = () => {
  const buttons = [
    { icon: 'fa-solid fa-house', title: 'Home' },
    { icon: 'fa-solid fa-circle-info', title: 'Info' },
    { icon: 'fa-solid fa-question', title: 'Help' },
  ];

  return (
    <AppBar position="static" className="">
      <div className="flex justify-between items-center pl-7 py-1">
        <div className="flex -ml-6">
          <img
            src="https://github.com/rishadsanian/ledger/assets/77033627/10290488-d4ea-4b3c-bd1d-f8b4e7d078ba"
            alt="ledger"
            style={{ maxWidth: '100%', maxHeight: '35px' }} // Adjust the maxHeight as desired
          />
        </div>
<div class="w-1/3">
<SearchBarNav />
</div>

        <div className="flex items-center justify-end">
          {buttons.map((button, index) => (
            <Tooltip key={index} title={button.title}>
              <Button color="inherit">
                <i className={` ${button.icon}`}></i>
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>
    </AppBar>
  );
};

export default TopNavbar;