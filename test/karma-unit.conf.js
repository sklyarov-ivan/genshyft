var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    // 'app/js/controllers.js',

    //extra testing code
    // 'bower_components/angular-mocks/angular-mocks.js',
    'app/lib/angular/angular-mocks-1.1.5.js',

    //mocha stuff
    'test/mocha.conf.js',




    //test files
    './test/unit/**/*.js',
  ]);

  config.set(conf);
};
