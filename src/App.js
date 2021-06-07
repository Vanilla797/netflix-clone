import React from "react";

import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Brouse, Signin, Signup } from "./pages";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BROUSE}>
        <Brouse />
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
