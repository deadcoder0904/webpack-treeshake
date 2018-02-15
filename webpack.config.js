const path = require("path");
const webpack = require("webpack");

const config = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};

module.exports = config;
