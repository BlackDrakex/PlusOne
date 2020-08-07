const baseConfig = require('../webpack.config');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(
  {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'main.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
  baseConfig
);
