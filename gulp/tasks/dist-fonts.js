(function () {
  module.exports = function (gulp, $, config, args) {
    return function () {
      return gulp.src([config.paths.bootstrap.fonts])
        .pipe(gulp.dest(config.paths.dist + '/fonts/'));
    };
  };
}());

