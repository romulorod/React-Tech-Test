import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Simulation from "./pages/Simulation/";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/simulation">
          <Simulation />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
