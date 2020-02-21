import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import LivePage from "views/LivePage.jsx";
import LandingPage from "views/LandingPage.jsx";

import "assets/scss/material-kit-pro-react.scss";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/live" exact component={LivePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
