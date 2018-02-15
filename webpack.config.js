const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const Jarvis = require("webpack-jarvis");

let plugins = [new Jarvis()];

if (process.env.NODE_ENV === "production") plugins.push(new UglifyJSPlugin());

const config = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins
};

module.exports = config;
