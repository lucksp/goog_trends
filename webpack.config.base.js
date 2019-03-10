const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    app: [path.join(__dirname, "./src/scripts")]
  },
  output: {
    publicPath: "/",
    filename: "[name]-bundle.js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors-bundle",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.join(__dirname, "./src")],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loaders: [
          { loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: "last 2 versions"
                })
              ]
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/assets/img/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};
