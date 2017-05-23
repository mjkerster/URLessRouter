// Karma configuration
// Generated on Thu Feb 09 2017 15:15:31 GMT-0500 (EST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/*.test.js'
    ],
    exclude: [
    ],
    webpack: {
      module: {
        preLoaders: [
          {
            test: /\.js/,
            exclude: /(test|node_modules|bower_components)/,
            loader: 'istanbul-instrumenter'
          }
        ]
      }
    },
    reporters: ['progress', 'coverage'],
    preprocessors: {
        'src/*.js': ['webpack', 'coverage'],
        'test/*.test.js': ['webpack']
    },
    coverageReporter: {
      type : 'html',
      dir : 'test/reports'
    },
    // web server port
    port: 9876,
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    customLaunchers: {  
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  });

  if(process.env.TRAVIS){
    config.browsers = ['Chrome_travis_ci'];
    }
}
