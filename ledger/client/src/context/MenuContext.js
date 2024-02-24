// AccountContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const MenuContext = createContext();

export const AccountProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [view, setView ] = useState(null);
  
  

  return (
    <MenuContext.Provider value={{ view, setView  }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
