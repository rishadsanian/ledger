import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListAltIcon from "@mui/icons-material/ListAlt";

const SideBar = () => {
  const menu = [
    { id: 1, label: "Dashboard", icon: <DashboardIcon /> },
    { id: 2, label: "Ledger", icon: <BookIcon /> },
    { id: 3, label: "Chart of Accounts", icon: <ListAltIcon /> },
    { id: 4, label: "Reports", icon: <BarChartIcon /> },
  ];
  return (
    
      <List className="flex flex-col">
        {menu.map((item) => (
          <ListItem  key={item.id} className="!text-white gap-2">
            <div className="">
            {item.icon}
            </div>
            <ListItemText primary={item.label} className="font-bold" />
            
          </ListItem>
        ))}
      </List>
    
  );
};

export default SideBar;
