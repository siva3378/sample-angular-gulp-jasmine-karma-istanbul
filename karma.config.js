// Karma configuration
module.exports = function (config) {
    // load application configuration file
    var gulpConfig = require('./config')();
    var testDir = "tests/";
    // setting karma configurations
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // list of files / patterns to load in the browser
        files: gulpConfig.getKarmaFiles(),
        // list of files to exclude
        exclude: [
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/app/**/*.js': ['coverage'],
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['html', 'progress', 'coverage',
//            'hy-html', 'hy-reporter'
        ],
        // the default configuration 
        coverageReporter: {
            type: 'html',
            dir: testDir+'reports/coverage'
        },
        htmlReporter: {
            outputDir: testDir+'reports/unit-test', // where to put the reports  
            templatePath: null, // set if you moved jasmine_template.html 
            focusOnFailures: true, // reports show failures on start 
            namedFiles: true, // name files instead of creating sub-directories 
            pageTitle: "Unit test case report", // page title for reports; browser info by default 
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 


            // experimental 
            preserveDescribeNesting: false, // folded suites stay folded  
            foldAll: true, // reports start folded (only with preserveDescribeNesting) 
        },
        htmlAngularReport: {
            outputFile: 'angularReport.html',
            reportFolder: testDir+'reports/angularReport',
            reportTitle: 'Unit test case report'
        },
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//        logLevel: config.LOG_DEBUG,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },
        plugins: [
            'karma-jasmine',
            'karma-html-reporter',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
//            'karma-hy-html-reporter'
        ]
    });
};
