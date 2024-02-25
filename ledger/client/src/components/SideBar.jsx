import React, { useState } from "react";
import { List, ListItem, ListItemText, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideBar = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className={`pt-8 space-y-8 sidebar ${open ? "open" : "closed"} whitespace-nowrap`}>
      <div className={`flex justify-start ml-5 cursor-pointer`} onClick={toggleOpen}>
        <i className="text-white fas fa-bars"></i>
      </div>

      <List className="flex flex-col overflow-hidden">
        {menu.map((item) => (
          <ListItem key={item.id} className="!text-white gap-2 cursor-pointer h-12" onClick={() => handleItemClick(item.path)}>
            {open ? (
              <div className="">{item.icon}</div>
            ) : (
              <Tooltip title={item.label} placement="right">
                <div className="">{item.icon}</div>
              </Tooltip>
            )}
            {open && <ListItemText primary={item.label} className="font-bold text-sm" />}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
