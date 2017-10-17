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
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    },
    externals: [
        {react: {root: 'React', amd: 'react', commonjs: 'react', commonjs2: 'react'}},
        {'prop-types': {root: 'PropTypes', amd: 'prop-types', commonjs: 'prop-types', commonjs2: 'prop-types'}},
        {clipboard: {root: 'Clipboard', amd: 'clipboard', commonjs: 'clipboard', commonjs2: 'clipboard'}}
    ]
};
