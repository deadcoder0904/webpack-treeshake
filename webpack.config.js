const path = require("path");
const webpack = require("webpack");
const LodashWebpackPlugin = require("lodash-webpack-plugin");
const Jarvis = require("webpack-jarvis");

const config = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
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
  plugins: [new LodashWebpackPlugin()].concat(
    process.env.JARVIS ? [new Jarvis()] : []
  ),
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  }
};

module.exports = config;
