const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "app.bundle.js" // if we remove this file name then it will automatically create main.js file
  },
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use:{
        loader: "babel-loader"
      }
    },
    {
      test: /\.html$/,
      use : [
        {
          loader: "html-loader"
        }
      ]
    }
  ]
  },
  plugins : [
    new HtmlWebpackPlugin({ // creates the html file dynamically
      template: "./src/index.html",
      // filename: "./index.html"
    })
  ],
  devtool: "source-map"
}
