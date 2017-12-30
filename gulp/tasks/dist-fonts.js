(function () {
  module.exports = function (gulp, $, config, args) {
    return function () {
      return gulp.src([config.paths.bootstrap.fonts, config.paths.devicon.fonts])
        .pipe(gulp.dest(config.paths.dist + '/assets/fonts/'));
    };
  };
}());

