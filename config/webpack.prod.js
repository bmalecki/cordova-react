var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports =  webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('www'),
    publicPath: undefined,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
      'process.env.ENV': JSON.stringify(ENV)
    }),

    new webpack.optimize.AggressiveMergingPlugin(),

		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
  ]
});
