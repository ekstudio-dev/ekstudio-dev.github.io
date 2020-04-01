import React from "react";
import { ThemeProvider } from "styled-components";
import { light } from "../styles/theme/";

import GlobalStyles from "./../styles/base/global.styled";
import AppRouter from "./AppRouter";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
