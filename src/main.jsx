import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
// import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      color:"#21e"
    },
    secondary: {
      main: "#fff",
      color:"#000"
    },
    ternary:{
      main:"#21e"
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
