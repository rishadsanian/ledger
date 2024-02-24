import React, { useState } from "react";
import { List, ListItem, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Footer = () => {
  const menu = [
    { id: 1, label: "Dashboard", icon: <DashboardIcon /> },
    { id: 2, label: "Ledger", icon: <BookIcon /> },
    { id: 3, label: "Chart of Accounts", icon: <ListAltIcon /> },
    { id: 4, label: "Reports", icon: <BarChartIcon /> },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 w-full bg-gray-800">
      <List className="flex justify-around p-4">
        {menu.map((item) => (
          <Tooltip title={item.label} key={item.id}>
            <div className="text-white cursor-pointer flex items-center justify-center">
              <div className="py-2 ">{item.icon}</div>
            </div>
          </Tooltip>
        ))}
      </List>
    </div>
  );
};

export default Footer;
