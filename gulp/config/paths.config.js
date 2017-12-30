module.exports = function (config) {
  'use strict';

  var bower = {
    directory: './src/lib/'
  };

  config.paths = {
    bower: bower,
    js: 'src/**/*.js',
    css: 'src/**/*.css',
    index: 'src/index.html',
    sass: 'src/sass/**/*.scss',
    allFiles: 'src/**/*',
    views: 'src/*.html',
    src: 'src/',
    dist: 'dist/',
    styles: 'src/assets/styles/',
    images: '**/images/*',
    bootstrap: {
      fonts: 'src/lib/bootstrap/fonts/*'
    },
    devicon: {
      fonts: 'src/lib/devicon/fonts/*'
    }
  }

  return config;

}