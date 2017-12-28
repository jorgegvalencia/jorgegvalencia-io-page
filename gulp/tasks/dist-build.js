(function () {
  module.exports = function (gulp, $, config, args) {
    return function () {

      var jsFilter = $.filter([config.paths.js], {
        restore: true
      });
      var cssFilter = $.filter([config.paths.css], {
        restore: true
      });
      var indexExclude = $.filter([config.paths.allFiles, '!' + config.paths.views], {
        restore: true
      });

      var uglify = $.uglify()
        .on('error', function (err) {
          $.util.log($.util.colors.red('[Error]'), err.toString());
          this.emit('end');
        });

      return gulp.src([config.paths.views])
        .pipe($.cssUseref())
        .pipe($.useref())
        .pipe($.sourcemaps.init())
        .pipe(jsFilter)
        .pipe(uglify)
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe($.cleanCss())
        .pipe(cssFilter.restore)
        .pipe(indexExclude)
        .pipe($.rev()) // Rename the concatenated files (but not index.html)
        .pipe(indexExclude.restore)
        .pipe($.revReplace())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.paths.dist));
    };
  };
}());