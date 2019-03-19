const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  // Change to production source maps
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "'production'"
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Production",
      template: "public/index.html",
      favicon: "public/assets/img/favicon.ico"
    })
  ]
});
