const path = require('path');

module.exports = {
  entry: {
    client: './src/client.entry.js'
  },
  output: {
    path: path.resolve(__dirname, './assets/bundle'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
