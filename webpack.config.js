var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: {
    'script': './scripts/index.jsx',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader'},
    ],
  },

  resolve: {
    root: path.join(__dirname, 'scripts'),
    extensions: ['', '.js', '.jsx', '.json'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
