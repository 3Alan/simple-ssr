const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client.entry.js',
  output: {
    path: path.resolve(__dirname, './assets/bundle'),
    filename: '[name].js',
    // 配置js公共路径
    publicPath: '/assets/bundle/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              // 开启 css module
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ]
};
