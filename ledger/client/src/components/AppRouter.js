// AppRouter.js
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import MainAccounts from "../components/accounts/MainAccounts";
import MainEntries from "../components/entries/MainEntries";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListAltIcon from "@mui/icons-material/ListAlt";  
import Dashboard from "@mui/icons-material/Dashboard";

const menu = [
  { id: 1, label: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { id: 2, label: "Accounts", icon: <BookIcon />, path: "/accounts" },
  { id: 3, label: "Entries", icon: <ListAltIcon />, path: "/entries" },
  { id: 3, label: "Reports", icon: <BarChartIcon />, path: "/reports" },
];





const AppRouter = () => {
  const [view, setView] = useState(  { id: 1, label: "Dashboard", icon: <DashboardIcon />, path: "/" },
);
  return (
    <Router>

        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounts" element={<MainAccounts />} />
            <Route path="/entries" element={<MainEntries />} />
          </Routes>

          <Footer menu={menu} />
        </div>
    </Router>
  );
};

export default AppRouter;
