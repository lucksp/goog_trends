import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const render = App => ReactDOM.render(<App />, document.getElementById("root"));

render(App);
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  const NextApp = require("./components/App").default;
  render(NextApp);
}
