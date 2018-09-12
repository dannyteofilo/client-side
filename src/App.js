import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "components/header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff5722" }, // Purple and green play nicely together.
    secondary: { main: "#00b0ff" } // This is just green.A700 as hex.
  }
});

class App extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <MuiThemeProvider theme={theme}>
          <Header />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
