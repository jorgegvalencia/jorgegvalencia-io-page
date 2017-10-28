(function () {
  module.exports = function (gulp, $, config, args) {
    return function () {
      return $.del([
        'dist/**/*', '!dist/.git', '!dist/README.md'
      ]);
    };
  };
}());

