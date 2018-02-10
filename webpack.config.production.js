const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    // vendor: ['add here'],
    app: "./src/scripts/index.js"
  },
  output: {
    filename: "static/[name].[hash].js",
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
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                ctx: {
                  autoprefixer: {
                    browsers: "last 2 versions"
                  }
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html"
      // favicon: "public/favicon.ico"
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['vendor'],
    //   minChunks: Infinity
    // }),
    new ExtractTextPlugin({
      filename: "styles/styles.[contenthash].css",
      allChunks: true
    }),

    new ExtractTextPlugin({
      filename: "[name].[contenthash].css",
      disable: process.env.NODE_ENV === "development"
    })
  ]
};
