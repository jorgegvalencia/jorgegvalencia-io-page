(function () {
  module.exports = function (gulp, $, config, args) {
    return function () {
      return gulp.src([config.paths.images])
        .pipe($.cache($.imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        })))
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe($.size());
    };
  };
}());
