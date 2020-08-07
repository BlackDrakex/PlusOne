const baseConfig = require('../webpack.config');
const { merge } = require('webpack-merge');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(
  {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'main.[contenthash].js',
    },
    plugins: [new CleanWebpackPlugin(), new MiniCSSExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
  baseConfig
);
