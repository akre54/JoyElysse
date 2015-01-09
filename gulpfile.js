var gulp = require('gulp'),
    del = require('del'),
    styl = require('gulp-styl');

var appDir = __dirname + '/app',
    publicDir = process.env.ELYSSE_PUBLIC_DIR || __dirname + '/public';

// remove dumb retina hack
require('gulp-styl/node_modules/styl/node_modules/rework').at2x = function() { return function() {} };

gulp.task('clean', function(cb) {
  del([publicDir + '/**/*'], {force: true}, cb);
});

gulp.task('copy', function() {
  return gulp.src([appDir + '/**/*.{js,jpg,ico,html}'])
    .pipe(gulp.dest(publicDir));
});

gulp.task('build:style', function() {
  return gulp.src(appDir + '/**/*.styl')
    .pipe(styl({ whitespace: true }))
    .pipe(gulp.dest(publicDir));
});

gulp.task('watch', ['copy', 'build:style'], function() {
  return gulp.watch(appDir + '/**', ['copy', 'build:style']);
});

gulp.task('build', ['clean', 'copy', 'build:style']);
gulp.task('default', ['clean', 'watch']);
