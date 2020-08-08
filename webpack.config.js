const HTMLWebpackPlugin = require('html-webpack-plugin');

const pluginOptions = {
  filename: 'index.html',
  template: './src/index.pug',
};

module.exports = {
  entry: './src/entry.ts',
  plugins: [new HTMLWebpackPlugin(pluginOptions)],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.woff2?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'assets/fonts',
        },
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        loader: 'ts-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'assets/imgs',
        },
      },
    ],
  },
};
