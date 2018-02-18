import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "./Home";
import PageLink from "./PageLink";
import NotFound from "./NotFound";
import Loading from "./Loading";

const AsyncDynamicPage = importedComponent(() => import("./PageLink"), {
  LoadingComponent: Loading
});

const AsyncNoMatch = importedComponent(() => import("./NotFound"), {
  LoadingComponent: Loading
});

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/link" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
