import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import PageLink from "./PageLink";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/link" component={PageLink} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
