import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./components/TopNavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import MainAccounts from "./components/accounts/MainAccounts";
import MainEntries from "./components/entries/MainEntries";
import Dashboard from "@mui/icons-material/Dashboard";
import { AccountProvider } from "./context/AccountContext";
import menu from "./config/menuConfig";

const App = () => {
  // Filter menu items based on show property
  const topNavBarMenu = menu.filter((item) => item.show.topNavBar);
  const sideBarMenu = menu.filter((item) => item.show.sideBar);
  const footerMenu = menu.filter((item) => item.show.footer);

  return (
    <AccountProvider>
      <Router>
        <div className="flex-1 flex flex-col h-screen">
          <TopNavbar menu={topNavBarMenu} />

          <div className="flex h-screen">
            <div className="hidden sm:block w-1/8 bg-gray-800 px-1 pr-2">
              <SideBar menu={sideBarMenu} />
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/accounts" element={<MainAccounts />} />
                <Route path="/entries" element={<MainEntries />} />
              </Routes>
            </div>
          </div>

          <div className="w-full">
            <Footer menu={footerMenu} />
          </div>
        </div>
      </Router>
    </AccountProvider>
  );
};

export default App;
