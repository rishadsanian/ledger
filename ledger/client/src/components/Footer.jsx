// Footer.jsx
import React from "react";
import { List,  Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = ({ menu }) => {
  return (
    <div className="sm:hidden fixed bottom-0 w-full bg-gray-800">
      <List className="flex justify-around p-4">
        {menu.map((item) => (
          <Tooltip title={item.label} key={item.id}>
            <Link to={item.path} className="text-white cursor-pointer flex items-center justify-center">
              <div className="py-2">{item.icon}</div>
            </Link>
          </Tooltip>
        ))}
      </List>
    </div>
  );
};

export default Footer;
