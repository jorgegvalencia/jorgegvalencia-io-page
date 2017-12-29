(function () {

  // Load configuration and modules
  let gulp = require('gulp');
  let args = require('yargs').argv;
  let config = require('./gulp/config/')();
  let browserSync = require('browser-sync').create();
  let $ = require('gulp-load-plugins')({
    lazy: true
  });
  let gulpsync = $.sync(gulp);

  $.browserSync = browserSync;
  $.del = require('del');

  // Tasks definition
  gulp.task('dist-clean', task('dist-clean'));
  gulp.task('dist-build', gulpsync.sync(['sass', 'dist-clean', 'dist-fonts', 'dist-images'], 'dist-build'), task('dist-build'));
  gulp.task('dist-images', task('dist-images'));
  gulp.task('dist-fonts', task('dist-fonts'));
  gulp.task('sass', task('sass'));
  gulp.task('server-dev', task('server-dev'));
  gulp.task('default', ['sass', 'server-dev']);

  // Helper methods
  function task(task) {
    return require('./gulp/tasks/' + task)(gulp, $, config, args);
  }

}());