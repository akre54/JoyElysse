webpack = require 'webpack'

HtmlWebpackPlugin = require 'html-webpack-plugin'
ExtractTextPlugin = require 'extract-text-webpack-plugin'

autoprefixer = require 'autoprefixer-core'

module.exports =
  entry:
    elysse: './app/js/elysse.js'
    style: './app/css/app.styl'
  output:
    path: "#{__dirname}/public"
    filename: '[name].js'
    publicPath: '/pubic/'
  module:
    loaders: [
      { test: /\.styl$/, loader: ExtractTextPlugin.extract 'style-loader', 'css-loader!postcss-loader!stylus-loader' }
      { test: /\.(png|jpg|gif|ico)$/, loader: 'url-loader?limit=500000' }
    ]
  postcss: [autoprefixer]
  htmlWebpackPlugin:
    assets:
      main: 'public/elysse.js'
  plugins: [
    new ExtractTextPlugin 'css/[name].css'
    new HtmlWebpackPlugin
      template: 'app/index.html'
  ]
