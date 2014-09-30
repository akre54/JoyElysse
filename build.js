#!/usr/bin/env node

var webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),
    del = require('del'),
    mkdirp = require('mkdirp'),
    rimraf = require('rimraf');

var publicDir = './public';

if (process.argv[2] ===  '--watch') webpackConfig.watch = true;

del([publicDir], function() {
  mkdirp(publicDir, function() {
    webpack(webpackConfig, function(err, stats) {
      console.log(stats.toString());
    });
  });
});
