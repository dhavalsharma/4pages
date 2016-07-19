'use strict';

var webpack = require("webpack");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'angular2']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
      //,{test: /\.scss$/, loaders: ["style", "css", "sass"]}
      // sass-loader not scss-loader
      ,{test: /\.scss$/,exclude: /node_modules/,loaders: ['raw-loader', 'sass-loader'] }
    ]
  },

  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
