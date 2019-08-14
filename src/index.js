import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import LandingPage from "views/LandingPage/LandingPage.jsx";
import LivePage from "views/LivePage/LivePage.jsx";

import "assets/scss/material-kit-pro-react.scss";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/live" component={LivePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
