const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

let dev_config = {
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

module.exports = validate(dev_config);

