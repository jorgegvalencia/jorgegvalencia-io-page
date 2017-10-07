(function () {
  module.exports = function (gulp, $, config, args) {
    return function () {
      return gulp.src(['dist/', '!dist/.git', '!dist/README.md'], { read: false })
        .pipe($.clean());
    };
  };
}());

