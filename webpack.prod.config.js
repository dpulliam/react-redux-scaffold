require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public'),
  img: path.join(__dirname, 'src/assets/images')
};

let prod_config = {
  entry: {
    app: PATHS.src,
    vendor: ['react']
  },
  output: {
    path: PATHS.public,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    devtoolModuleFilenameTemplate: function(info){
    return "file:///"+encodeURI(info.absoluteResourcePath);
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.src
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        include: PATHS.src
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
        include: PATHS.src
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=100000',
        include: PATHS.img
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HTMLWebpackPlugin({
      title: 'React Redux Scaffold',
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      },
      mangle: {
        except: ['$'],
        screw_ie8 : true,
        keep_fnames: true
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = validate(prod_config, {
  quiet: true
});

