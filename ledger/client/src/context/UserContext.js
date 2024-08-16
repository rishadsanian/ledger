// UserContext.js
import React, { useState, createContext, useContext } from 'react';

// Create a UserContext with default values
const UserContext = createContext({
  user: null,
  setUser: () => {},
});

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);

// UserContext provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user state is null

  // Example function to set the user
  const handleSetUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
