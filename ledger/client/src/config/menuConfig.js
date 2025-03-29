// This code defines the menu configuration for a React application.
// It exports a function called MenuConfig that returns an array of menu items.
// Each menu item has properties like id, label, icon, path, show, and selected.
// The menu items are used to generate the navigation menu in the application.
// The useState hook is used to manage the state of the menu items.
// The initial state of the menu items is defined in the useState hook.
// The menu items are then returned as part of the MenuConfig function's return value.

//Settings - disable account - entry - sub accounts only | search accounts | tags

import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListAltIcon from "@mui/icons-material/ListAlt";

const MenuConfig = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      label: "Dashboard",
      icon: <DashboardIcon fontSize="small" />,
      path: "/",
      show: { topNavBar: false, sideBar: "main", footer: true },
      selected: true,
    },
    {
      id: 2,
      label: "Accounts",
      icon: <BookIcon fontSize="small" />,
      path: "/accounts",
      show: { topNavBar: false, sideBar: "main", footer: true },
      selected: false,
    },
    {
      id: 3,
      label: "Entries",
      icon: <ListAltIcon fontSize="small" />,
      path: "/entries",
      show: { topNavBar: false, sideBar: "main", footer: true },
      selected: false,
    },
    {
      id: 4,
      label: "Reports",
      icon: <BarChartIcon fontSize="small" />,
      path: "/reports",
      show: { topNavBar: false, sideBar: "main", footer: true },
      selected: false,
    },
    {
      id: 5,
      label: "Home",
      icon: <i className="fa-solid fa-house"></i>,
      path: "/",
      show: { topNavBar: true, sideBar: false, footer: false },
      selected: true,
    },
    {
      id: 6,
      label: "Info",
      icon: <i className="fas fa-info-circle"></i>,
      path: "/info",
      show: { topNavBar: true, sideBar: false, footer: false },
      selected: false,
    },
    {
      id: 7,
      label: "Help",
      icon: <i className="fas fa-question-circle"></i>,
      path: "/help",
      show: { topNavBar: true, sideBar: false, footer: false },
      selected: false,
    },
    {
      id: 8,
      label: "Settings",
      icon: <i className="fas fa-cogs"></i>,
      path: "/settings",
      show: { topNavBar: true, sideBar: "bottom", footer: false },
      selected: false,
    },
    {
      id: 9,
      label: "Account",
      icon: <i className="fas fa-user"></i>,
      path: "/account",
      show: { topNavBar: true, sideBar: "bottom", footer: false },
      selected: false,
    },
  ]);

  return { menu, setMenu };
};

export default MenuConfig;
