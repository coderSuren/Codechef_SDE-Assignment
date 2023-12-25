import React, { createContext, useState } from 'react';

// Create a context
export const Context = createContext();

// Create a context provider
export const ContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to update the logged-in user
  const updateLoggedInUser = (user) => {
    setLoggedInUser(user);
  };

  return (
    <Context.Provider value={{ loggedInUser, updateLoggedInUser }}>
      {children}
    </Context.Provider>
  );
};
