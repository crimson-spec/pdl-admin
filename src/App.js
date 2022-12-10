import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import RoutesApp from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesApp />
    </ThemeProvider>
  );
};

export default App;
