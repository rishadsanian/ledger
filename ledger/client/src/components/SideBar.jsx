import React, { useState } from "react";
import { List, ListItem, ListItemText, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";


const SideBar = ({ menu, setMenu }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleItemClick = (path) => {
    const updatedMenu = menu.map((item) => ({
      ...item,
      selected: item.path === path,
    }));

    setMenu(updatedMenu);
    navigate(path);
  };

  return (
    <div
      className={`pt-8 space-y-8 px-1 sidebar ${
        open ? "open" : "closed"
      } whitespace-nowrap`}
    >
      <div
        className={`flex justify-start ml-5 cursor-pointer`}
        onClick={toggleOpen}
      >
        <i className="text-white fas fa-bars"></i>
      </div>

      <List className="flex flex-col overflow-hidden space-y-2">
        {menu.map((item) => (
<ListItem
  key={item.id}
  className={`list item !text-white rounded-md gap-2 cursor-pointer h-12   flex items-center justify-start  hover:bg-slate-700 hover:text-white  hover:bg-opacity-50 ${item.selected ? 'selected !fade-in bg-slate-700 text-white text-opacity-100 shadow-lg rounded-md !bg-opacity-100' : '!text-opacity-60 '} ${!open? '!rounded-full sidebar !h-12 !w-12	!justify-center !fade-in ' : ''}`}
  onClick={() => handleItemClick(item.path, item.selected)}
>
  {open ? (
    <div className="">{item.icon}</div>
  ) : (
    <Tooltip title={item.label} placement="right">
      <div className="">{item.icon}</div>
    </Tooltip>
  )}
  {open && (
    <ListItemText
      primary={item.label}
      className="font-bold text-sm"
    />
  )}
</ListItem>
        ))}
      </List>

      <div className=" border-t border-slate-200 pt-2 "> {/* This ensures the following items appear at the bottom */}
        {/* Settings Button */}
        <ListItem
          className={`list item !text-white rounded-md gap-2 cursor-pointer h-12   flex items-center justify-start  hover:bg-slate-700 hover:text-white  hover:bg-opacity-50`}
          onClick={() => handleItemClick('/settings')}
        >
          <div className=""><i className="fas fa-cogs"></i></div>
          {open && (
            <ListItemText
              primary="Settings"
              className="font-bold text-sm"
            />
          )}
        </ListItem>

        {/* Account Button */}
        <ListItem
          className={`list item !text-white rounded-md gap-2 cursor-pointer h-12   flex items-center justify-start  hover:bg-slate-700 hover:text-white  hover:bg-opacity-50 `}
          onClick={() => handleItemClick('/account')}
        >
          <div className=""><i className="fas fa-user"></i></div>
          {open && (
            <ListItemText
              primary="Account"
              className="font-bold text-sm"
            />
          )}
        </ListItem>
      </div>
    </div>
  );
};

export default SideBar;