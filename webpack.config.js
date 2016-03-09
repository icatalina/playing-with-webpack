var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'sourceMap',
  resolve: {
    root: [
      path.resolve(__dirname + '/src/js'),
      path.resolve(__dirname + '/src/scss')
    ],
    alias: {
      'jquery': 'vendor/jquery-2.2.1.js'
    }
  },
  entry: {
    main: 'main.js'
  },
  output: {
    path: __dirname + '/assets/',
    publicPath: '/assets/',
    filename: '[name].js',
    chunkFilename: '/chunks/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'main', async: true}),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('main.css', {allChunks: false})
  ]
};
