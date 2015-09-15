module.exports = function() {
    /* Base path configurations */
    var src = "src/";
    var tests = "tests/";
    var build = "build/";
    var theme = "theme1.css";
    /* Sub folder configurations */
    var libs = src + "libs"; //bower_components_dir
    var styles = src + "styles/";
    var mocks = tests + "mocks/"
        //---------------------------//
    var config = {
        indexPath: "./",
        // main application landing page
        // all js & css files will be inject into this page
        indexPage: 'index.html',
        // app's Styles related files
        appStyles: {
            // all themes to compile & generate it's css files
            allThemes: styles + '*.sass',
            // all css files to be removed before sass compilation
            allCss: styles + '*.css',
            //generate css themes here
            cssThemes: styles + 'css-themes/',
            // only this theme will be included in index page
            currentTheme: styles + 'css-themes/' + theme
        },
        appScripts: {
            // for JS Hint
            allJs: [
                // files in app directory
                src + 'app/**/*.js',
                // files in current directory
                './*.js'
            ],
            // to inject js files in index page in specified order
            appJs: [
                // 1st inject all 'module' files
                src + 'app/**/*.module.js',
                // next all constant files
                src + 'app/**/*.constants.js',
                // next all 'service' files
                src + 'app/**/*.service.js',
                // next all 'directives' files
                src + 'app/**/*.directive.js',
                // next all 'controller' files
                src + 'app/**/*.controller.js',
                // finally inject the rest/remaining of js files
                src + 'app/**/*.js'
            ],
        },
        // for AngularJs template cache - improves performance
        html2js: {
            templates: [
                // convert all html files
                src + 'app/**/*.html',
                // except those which are named with index.html
                '!' + src + 'app/**/index.html'
            ],
            options: {
                // name of the module
                moduleName: 'app.templates',
                // url prefix, when directive templates are inject into cache
                prefix: src + "app/"
            },
            file: 'app.templates.module.js',
            dest: src + "app/"
        },
        // For minification & build
        build: {
            allLibJs: build + 'all_libs.min.js',
            allLibCss: build + 'all_libs.min.css',
            allFonts: build + 'all_fonts',
            allAppJs: build + 'all_libs.min.js',
            allAppCss: build + 'all_libs.min.css'
        },
        // testing related files for Karma configuration
        tests: {
            unit: [
                tests + 'unit/**/*.js',
                // fixtures to load json mock data
                {
                    pattern: mocks + '**/*.json',
                    watched: true,
                    served: true,
                    included: false
                }
            ],
            e2e: [tests + 'e2e/**/*.js']
        },
        /**
         * Bower and npm locations
         */
        bower: {
            json: require('./bower.json'),
            directory: libs,
            ignorePath: ''
        }
    }; //config object ------------------------------
    /*****************************************************
     *  Config functions
     *****************************************************/
    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };
    config.getRelative = function(pathToAppend, stringArray) {
        return stringArray.map(function(str) {
            return pathToAppend + str;
        });
    };
    config.getKarmaFiles = function() {
        var wiredep = require('wiredep')({
            devDependencies: true
        })['js'];
        var path = require('path');
        var bowerFiles = wiredep.map(function(file) {
            //            return path.relative(process.cwd(), file);
            return file;
        });
        // var devFiles = config.appScripts.appJs.map(function(path) {
        //     return src + path;
        // })
        
        var allFiles = bowerFiles.concat(config.appScripts.appJs).concat(config.tests.unit)
        return allFiles;
    };
    return config;
};