import React from "react";
import { ThemeProvider, useTheme, useThemeUpdate } from "./store/theme-context";

const useContext = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <ThemeProvider>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <div className={`box ${darkTheme ? "dark" : "light"}`}></div>
    </ThemeProvider>
  );
};

export default useContext;
