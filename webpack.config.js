const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/client.entry.js',
  output: {
    path: path.resolve(__dirname, './assets/bundle'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [new LoadablePlugin(), new CleanWebpackPlugin()]
};
