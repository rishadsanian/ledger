import { React, useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./components/TopNavBar";
import MenuSidebar from "./components/MenuSidebar";
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
import ApiPortal from "./pages/ApiPortal";

const App = () => {
  // Filter menu items based on show property
  const [isMenuSidebarOpen, setIsMenuSidebarOpen] = useState(false);

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

  const toggleMenuSidebar = () => setIsMenuSidebarOpen(!isMenuSidebarOpen);

  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        {window.location.pathname !== "/landing" && (
          <div
            className={`sidebar-container  menu-sidebar
               
               ${isMenuSidebarOpen ? "open " : "closed "} whitespace-nowrap`}
          >
            <MenuSidebar
              menu={sideBarMenu}
              setMenu={setSideBarMenu}
              isSidebarOpen={isMenuSidebarOpen}
              toggleMenuSidebar={toggleMenuSidebar}
              setIsMenuSidebarOpen={setIsMenuSidebarOpen}
            />
          </div>
        )}

        {/* Main layout */}
        <div className="main-layout">
          <TopNavbar
            menu={topNavBarMenu}
            setMenu={setTopBarMenu}
            toggleMenuSidebar={toggleMenuSidebar}
          />
          <Breadcrumb menu={menu} setMenu={setTopBarMenu} />
          {/* Main Content Area */}
          <div className="main-wrapper">
            <AccountProvider>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/api" element={<ApiPortal />} />
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

        {/* Right Sidebar */}

        {/* Footer */}
        <Footer menu={footerMenu} />
      </div>
    </Router>
  );
};

export default App;
