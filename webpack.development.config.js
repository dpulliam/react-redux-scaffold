const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'React Redux Scaffold'
    })
  ]
};
