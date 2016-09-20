'use strict'

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rimraf            = require('rimraf')
const path              = require('path')

const autoprefixer = require('autoprefixer-core')

const webpackConfig = module.exports = {
  watch: true,
  entry: {
    elysse: './app/js/elysse.js'
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    root: path.join(__dirname, 'app')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus') },
      { test: /\.(png|jpg|gif|ttf|woff|eot|svg)$/, loader: 'url?limit=500' }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    // apply: () => rimraf.sync(`${webpackConfig.output.path}/*`),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}


if (process.env.PROD) {
  webpackConfig.watch = false
  webpackConfig.output.publicPath = 'http://elyssemusic.com/'
  webpackConfig.output.path = `${__dirname}/../elyssemusic.com`
}
