(function () {
  module.exports = function (gulp, $, config, args) {
    return function () {
      $.browserSync.init({
        server: '.',
        port: 8080,
        startPath: config.paths.index
      });

      gulp.watch(config.paths.index).on('change', $.browserSync.reload);
      gulp.watch(config.paths.sass, ['sass'], function (event) {
        $.util.log($.util.colors.blue('[File]'), event.path + ' was ' + event.type + ', running tasks...');
      });
    };
  };
}());


