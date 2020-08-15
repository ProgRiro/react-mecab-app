import React from "react";
import "./App.css";
import { customTheme } from "./Presentation/Styles/theme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Home from "./Presentation/components/pages/Home";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
