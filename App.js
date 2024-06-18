import React from "react";
import ThemeProvider, { ThemeContext } from "./ThemeContext";
import ThemedComponent from "./ThemedComponent";

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
