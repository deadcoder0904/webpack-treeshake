const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new UglifyJsPlugin()
    // new webpack.optimize.UglifyJsPlugin() doesn't work
  ]
};

module.exports = config;
