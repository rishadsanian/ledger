import { React, useState, useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./components/TopNavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import MainAccounts from "./components/accounts/MainAccounts";
import MainEntries from "./components/entries/MainEntries";
// import Dashboard from "@mui/icons-material/Dashboard";
import Dashboard from "./pages/Dashboard";
import { AccountProvider } from "./context/AccountContext";
import menuConfig from "./config/menuConfig";

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
    <AccountProvider>
      <Router>
        <div className="flex-1 flex flex-col h-screen">
          <TopNavbar menu={topNavBarMenu} setMenu={setTopBarMenu} />
  
          <div className="flex h-screen">
            <div class="flex flex-col">
            {/* Sidebar */}
            <div className="hidden sm:block w-1/8 bg-gray-800 px-1 pr-2  h-full">
              <SideBar menu={sideBarMenu} setMenu={setSideBarMenu} />
            </div>
            
            </div>
  
            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/accounts" element={<MainAccounts />} />
                <Route path="/entries" element={<MainEntries />} />
              </Routes>
            </div>
          </div>
  
          {/* Footer */}
          <div className="w-full">
            <Footer menu={footerMenu} />
          </div>
        </div>
      </Router>
    </AccountProvider>
  );
};

export default App;
