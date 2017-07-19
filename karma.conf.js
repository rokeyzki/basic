const webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    basePath: 'src/react/components/hello_redux',
    frameworks: [
      'mocha', 'chai',
    ],
    reporters: [
      'mocha', 'progress', 'coverage',
    ],
    webpack: webpackConfig,
    browsers: ['PhantomJS'],
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: true, // 单次
    concurrency: Infinity,
    files: [
      'test/**/*.spec.js',
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
    },
    coverageReporter: {
      dir: 'test-coverage/',
      type: 'html',
    },
  });
};
