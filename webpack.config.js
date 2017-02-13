var path = require('path');

module.exports = {
  entry: path.resolve(path.join(__dirname, '.', 'index.js')),
  output: {
    path: path.resolve(path.join(__dirname, '.', 'dist')),
    library: 'ReactClipboard',
    libraryTarget: 'umd',
    filename: 'react-clipboard.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015','stage-0'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },
  externals: [
    {react: {root: 'React', amd: 'react', commonjs: 'react', commonjs2: 'react'}},
    {clipboard: {root: 'Clipboard', amd: 'clipboard', commonjs: 'clipboard', commonjs2: 'clipboard'}}
  ]
};
