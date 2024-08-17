import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./styles/tailwind.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { UserProvider } from "./context/UserContext";

const customColors = {
  primary: "#0d1b2a",
  secondary: "#1b263b",
  tertiary: "#415a77",
  quaternary: "#778da9",
  background: "#e0e1dd",
};

const theme = createTheme({
  palette: {
    primary: {
      main: customColors.primary,
    },
    secondary: {
      main: customColors.secondary,
    },
    tertiary: {
      main: customColors.tertiary,
    },
    quaternary: {
      main: customColors.quaternary,
    },
    background: {
      default: customColors.background,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
      <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
