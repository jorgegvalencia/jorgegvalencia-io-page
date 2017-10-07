(function () {
  /* eslint no-undef: 0 no-unused-vars: 0 */
  module.exports = function (gulp, $, config, args) {
    return function () {
      return gulp.src(config.paths.sass)
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sourcemaps.write('./maps'))
        .pipe(gulp.dest(config.paths.styles))
        .pipe($.browserSync.stream());
    };
  };
}());
