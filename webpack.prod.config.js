require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  img: path.join(__dirname, 'src/assets/images')
};

let dev_config = {
  entry: {
    app: PATHS.src
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: [
          PATHS.src
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap'],
        include: [
          PATHS.src
        ]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"],
        include: [
          PATHS.src
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=100000',
        include: PATHS.img
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'React Redux Scaffold',
      template: './src/index.ejs'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = validate(dev_config, {
  quiet: true
});

