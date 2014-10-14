#!/usr/bin/env node

var fs = require('fs'),
    del = require('del'),
    mkdirp = require('mkdirp'),
    ncp = require('ncp'),
    stylus = require('stylus');

var appDir = __dirname + '/app',
    publicDir = process.env.ELYSSE_PUBLIC_DIR || __dirname + '/public',
    cssDir = publicDir + '/css',
    appStyl = __dirname + '/app/css/app.styl',
    appCss = cssDir + '/app.css';

del([publicDir], {force: true}, function(err) {
  if (err) console.log(err);
  mkdirp.sync(publicDir);
  ncp(appDir, publicDir, {filter: function(file) { return !/.(styl|coffee)$/.test(file); }}, function(err) {
    if (err) console.log(err);
    stylus(fs.readFileSync(appStyl, 'utf8'))
      .set('filename', appStyl)
      .include(require('nib').path)
      .render(function(err, css) {
        if (err) console.log(err);
        fs.createWriteStream(appCss).write(css);
        console.log('done');
      });
  });
});
