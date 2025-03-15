import { React, useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./components/TopNavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import MainAccounts from "./pages/MainAccounts";
import MainEntries from "./components/entries/MainEntries";
import MainReports from "./pages/MainReports";
import Dashboard from "./pages/Dashboard";
import Breadcrumb from "./components/Breadcrumb";
import { AccountProvider } from "./context/AccountContext";
import menuConfig from "./config/menuConfig";
import Landing from "./pages/Landing";
import Dev from "./pages/Dev";
import Login from "./pages/Login";

const App = () => {
  // Filter menu items based on show property

  const { menu, setMenu } = menuConfig();
  const [topNavBarMenu, setTopBarMenu] = useState(
    menu.filter((item) => item.show.topNavBar)
  );
  const [sideBarMenu, setSideBarMenu] = useState(
    menu.filter((item) => item.show.sideBar)
  );
  const [footerMenu, setFooterMenu] = useState(
    menu.filter((item) => item.show.footer)
  );

  useEffect(() => {
    setTopBarMenu(menu.filter((item) => item.show.topNavBar));
  }, [menu]);

  useEffect(() => {
    setSideBarMenu(menu.filter((item) => item.show.sideBar));
  }, [menu]);

  useEffect(() => {
    setFooterMenu(menu.filter((item) => item.show.footer));
  }, [menu]);

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-hidden">
        <TopNavbar menu={topNavBarMenu} setMenu={setTopBarMenu} />
  
        {/* Middle View */}
        <div className="flex flex-grow h-0">
          {/* Sidebar */}
          {window.location.pathname !== "/landing" && (
            <div className="hidden sm:block w-1/8 bg-gray-800">
              <SideBar menu={sideBarMenu} setMenu={setSideBarMenu} />
            </div>
          )}
  
          {/* Main Content Area */}
          <div className="flex flex-col w-full h-full relative overflow-hidden">
            <Breadcrumb menu={menu} setMenu={setTopBarMenu} />
            <div className="flex-grow overflow-y-auto bg-gray-100 px-3 py-4 sm:p-6">
              <AccountProvider>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/accounts" element={<MainAccounts />} />
                  <Route path="/entries" element={<MainEntries />} />
                  <Route path="/reports" element={<MainReports />} />
                  <Route path="/dev" element={<Dev />} />
                  <Route path="/landing" element={<Landing />} hidenav="true" />
                  <Route path="/login" element={<Login />} hidenav="true" />
                </Routes>
              </AccountProvider>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <Footer menu={footerMenu} />
      </div>
    </Router>
  );
  
};

export default App;
