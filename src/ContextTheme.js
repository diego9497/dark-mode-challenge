import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.log(window.matchMedia("(prefers-color-scheme: dark)"));
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode();
    }
  }, []);

  const value = {
    isDarkMode,
    setIsDarkMode: () => {
      setIsDarkMode(!isDarkMode);
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
