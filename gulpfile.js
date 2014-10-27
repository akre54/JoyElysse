var gulp = require('gulp'),
    del = require('del'),
    nib = require('nib'),
    stylus = require('gulp-stylus');


var appDir = __dirname + '/app',
    publicDir = process.env.ELYSSE_PUBLIC_DIR || __dirname + '/public';


gulp.task('clean', function(cb) {
  del([publicDir + '/**/*'], {force: true}, cb);
});

gulp.task('copy', function() {
  return gulp.src([appDir + '/**/*.{js,jpg,ico,html}'])
    .pipe(gulp.dest(publicDir));
});

gulp.task('build:style', function() {
  return gulp.src(appDir + '/**/*.styl')
    .pipe(stylus({use: nib(), linenos: true}))
    .pipe(gulp.dest(publicDir));
});

gulp.task('watch', function() {
  return gulp.watch(appDir + '/**', ['copy', 'build:style']);
});

gulp.task('build', ['clean', 'copy', 'build:style']);
gulp.task('default', ['clean', 'watch']);
