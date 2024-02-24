import React, { useState } from "react";
import { List, ListItem, ListItemText, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListAltIcon from "@mui/icons-material/ListAlt";


const SideBar = () => {

// console.log(menu);
  const menu = [
    { id: 1, label: "Dashboard", icon: <DashboardIcon /> },
    { id: 2, label: "Ledger", icon: <BookIcon /> },
    { id: 3, label: "Chart of Accounts", icon: <ListAltIcon /> },
    { id: 4, label: "Reports", icon: <BarChartIcon /> },
  ];

  const [open, setOpen] = useState(false);
  


  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`pt-8 space-y-8 sidebar ${open ? 'open' : 'closed'} whitespace-nowrap`}>
      <div className={`flex  justify-start ml-5 cursor-pointer`} onClick={toggleOpen}>
        <i className="text-white fas fa-bars"></i>
      </div>

      <List className="flex flex-col overflow-hidden">
        {menu.map((item) => (
          <ListItem key={item.id} className="!text-white gap-2 cursor-pointer h-12">
            {open ? (
              <div className="">{item.icon}</div>
            ) : (
              <Tooltip title={item.label} placement="right">
                <div className="">{item.icon}</div>
              </Tooltip>
            )}
            {open && <ListItemText primary={item.label} className="font-bold text-sm" />}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
