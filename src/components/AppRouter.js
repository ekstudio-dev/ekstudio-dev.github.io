import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Dzain from "./../pages/Dzain";

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/dzain" component={Dzain} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
