
// include gulp & gulp-debug
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

src = "./";
dst = "./";

// JS hint
gulp.task('jshint', function() {
  gulp.src(src + "*.js")
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(src + "idlet.dev.js")
  // .pipe(stripDebug())
  .pipe(uglify())
  .pipe(gulp.dest(dst + "idlet.js"));
});

// default gulp task
gulp.task('default', ['jshint', 'scripts'], function() {
  // watch for JS changes
  gulp.watch(src + '**/*.js', function() {
    gulp.run('jshint', 'scripts');
  });
});
