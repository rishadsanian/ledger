
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
      icon: <DashboardIcon />,
      path: "/",
      show: { topNavBar: false, sideBar: true, footer: true },
      selected: true,
    },
    {
      id: 2,
      label: "Accounts",
      icon: <BookIcon />,
      path: "/accounts",
      show: { topNavBar: false, sideBar: true, footer: true },
      selected: false,
    },
    {
      id: 3,
      label: "Entries",
      icon: <ListAltIcon />,
      path: "/entries",
      show: { topNavBar: false, sideBar: true, footer: true },
      selected: false,
    },
    {
      id: 4,
      label: "Reports",
      icon: <BarChartIcon />,
      path: "/reports",
      show: { topNavBar: false, sideBar: true, footer: true },
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
  ]);

  return {menu, setMenu};
};

export default MenuConfig;
