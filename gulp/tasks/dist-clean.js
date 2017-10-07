(function () {
  module.exports = function (gulp, $, config, args) {
    return function () {
      return gulp.src('dist/', { read: false })
        .pipe($.clean());
    };
  };
}());

