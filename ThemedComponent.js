import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    light: { backgroundColor: "white", color: "black" },
    dark: { backgroundColor: "black", color: "white" },
  };

  return (
    <div style={styles[theme]}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
};

export default ThemedComponent;
