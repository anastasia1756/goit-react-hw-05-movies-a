import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { App } from "components/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, theme } from "constants/index";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
