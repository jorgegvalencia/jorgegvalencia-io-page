'use strict';
module.exports = function () {

  var config = {};

  function getConfig(file) {
    config = require('./' + file)(config);
  }

  // getConfig('app.config');
  getConfig('paths.config');
  // getConfig('test.config');
  // getConfig('wiredep.config');
  // getConfig('dist.config');
  // getConfig('env.config');

  return config;

};
