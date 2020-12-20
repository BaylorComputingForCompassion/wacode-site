import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LivePage from "views/LivePage.jsx";
import LandingPage from "views/LandingPage.jsx";

import "assets/scss/material-kit-pro-react.scss";

var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/live" exact component={LivePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
