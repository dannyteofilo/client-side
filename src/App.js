import React, { Component } from "react";
import { Provider } from 'react-redux';
import { Route, HashRouter, Switch } from 'react-router-dom';


import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { getStore } from './shared/redux/store';

import Login from 'components/login'
import GuardedRoute from 'components/hocs/'
import Layout from 'components/header'

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff5722" }, // Purple and green play nicely together.
    secondary: { main: "#00b0ff" } // This is just green.A700 as hex.
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={getStore()} >
        <MuiThemeProvider theme={theme}>
          <HashRouter>
            <Switch>
              <Route path="/auth/login" component={Login} />
              <GuardedRoute path="/" component={Layout} />
            </Switch>
          </HashRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
