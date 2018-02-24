const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const config = require("../webpack.config.development");
  const compiler = webpack(config);
  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
      hot: true
    })
  );
  app.use(
    require("webpack-hot-middleware")(compiler, {
      log: console.log,
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000
    })
  );
}

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/data", (req, res) => {
  res.send("hi from server"); // replace me with real data
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log("Listening at port: ", port);
});
