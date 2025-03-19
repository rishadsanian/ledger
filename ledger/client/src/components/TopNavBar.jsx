import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchBarNav from "../assets/searchBarNav";
import { LedgerLogo, LedgerIcon } from "../assets/logos/LedgerLogo";

const TopNavbar = ({ menu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        // Close the menu when screen size is larger than or equal to 600px
        handleClose();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppBar position="static" className="">
      <div className="gird grid-cols-3 flex items-center pl-7 py-1">
        <div className=" flex -ml-7 w-full">
        
         
        </div>
        <div className="min-w-[300px] w-1/3 w-full">
          <SearchBarNav />
        </div>

        <div className="flex items-center justify-end w-full">
          {/* Conditionally render based on screen size using Tailwind classes */}
          <div className="hidden sm:flex">
            {menu.map(
              (item) =>
                item.show.topNavBar && (
                  <Tooltip key={item.id} title={item.label}>
                    <Button color="inherit">{item.icon}</Button>
                  </Tooltip>
                )
            )}
          </div>

          {/* For smaller screens, show bars icon with dropdown menu */}
          <div className="sm:hidden">
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            {Boolean(anchorEl) && (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom", // Set to "bottom" to position the menu below the anchor
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top", // Set to "top" to align the menu with the top edge of the anchor
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <div className="flex flex-col  py-1">
                  {menu.map(
                    (item) =>
                      item.show.topNavBar && (
                        <MenuItem key={item.id} onClick={handleClose}>
                          <div className="flex px-1 items-center justify-around gap-4">
                            {item.icon}
                            {item.label}
                          </div>
                        </MenuItem>
                      )
                  )}
                </div>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default TopNavbar;
