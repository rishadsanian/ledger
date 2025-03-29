import React from "react";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LedgerLogo, LedgerIcon } from "../assets/logos/LedgerLogo";

const MenuSidebar = ({
  menu,
  setMenu,
  isSidebarOpen,
  setIsMenuSidebarOpen,
  toggleMenuSidebar,
}) => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    const updatedMenu = menu.map((item) => ({
      ...item,
      selected: item.path === path,
    }));
    setMenu(updatedMenu);
    navigate(path);
    setIsMenuSidebarOpen(false);
  };

  return (
    <div className="pt-5 space-y-2">
      {/* Logo Section */}
      <div
        className={`flex ${
          isSidebarOpen ? "justify-start ml-1" : "justify-center mr-2"
        }`}
      >
        {isSidebarOpen ? <LedgerLogo /> : <LedgerIcon />}
      </div>

      {/* Toggle Button */}
      <div
        className={`sidebar-toggle ${
          isSidebarOpen ? "sidebar-toggle-open" : "sidebar-toggle-closed"
        }`}
        onClick={toggleMenuSidebar}
      >
        <i className="fas fa-bars"></i>
      </div>

      {/* Menu Items */}
      <div
        className={`menu-list ${
          !isSidebarOpen ? "items-center" : "items-start"
        } r`}
      >
        {menu.filter(item => item.show.sideBar === "main").map((item ) => (
          <div
            key={item.id}
            className={`
              menu-item 
              ${item.selected ? "menu-item-selected" : "menu-item-unselected"}
              ${
                !isSidebarOpen ? "menu-item-collapsed" : "menu-item-expanded"
              }              
            `}
            onClick={() => handleItemClick(item.path)}
          >
            {isSidebarOpen ? (
              item.icon
            ) : (
              <Tooltip title={item.label} placement="right">
                <span className="mx-auto">{item.icon}</span>
              </Tooltip>
            )}
            {isSidebarOpen && <span>{item.label}</span>}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div
        className={`menu-list border-t-2  ${
          !isSidebarOpen ? "items-center" : "items-start"
        } r`}
      >
        {menu.filter(item => item.show.sideBar === "bottom").map((item ) => (
          <div
            key={item.id}
            className={`
              menu-item 
              ${item.selected ? "menu-item-selected" : "menu-item-unselected"}
              ${
                !isSidebarOpen ? "menu-item-collapsed" : "menu-item-expanded"
              }              
            `}
            onClick={() => handleItemClick(item.path)}
          >
            {isSidebarOpen ? (
              item.icon
            ) : (
              <Tooltip title={item.label} placement="right">
                <span className="mx-auto">{item.icon}</span>
              </Tooltip>
            )}
            {isSidebarOpen && <span>{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSidebar;
