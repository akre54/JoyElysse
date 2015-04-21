webpack = require 'webpack'

HtmlWebpackPlugin = require 'html-webpack-plugin'
ExtractTextPlugin = require 'extract-text-webpack-plugin'

autoprefixer = require 'autoprefixer-core'

module.exports = webpackConfig =
  watch: true
  entry:
    elysse: './app/js/elysse.js'
  output:
    path: "#{__dirname}/public"
    filename: '[name].js'
    publicPath: '/'
  module:
    loaders: [
      { test: /\.styl$/, loader: ExtractTextPlugin.extract 'style-loader', 'css-loader!postcss-loader!stylus-loader' }
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=500' }
    ]
  postcss: [autoprefixer]
  plugins: [
    new ExtractTextPlugin 'style.css'
    new HtmlWebpackPlugin
      template: 'app/index.html'
  ]


if process.env.PROD
  webpackConfig.watch = false
  webpackConfig.output.publicPath = 'http://elyssemusic.com'
  webpackConfig.output.path = "#{__dirname}/../elyssemusic.com"
