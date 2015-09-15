(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);
    core.config(configure);

    ////////////////
    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = "6000";
        toastr.options.positionClass = 'toast-bottom-right';
        //        toastr.options.closeButton = true;
        //        toastr.options.preventDuplicates = true;

    }

    configure.$inject = ['$compileProvider', '$logProvider', 'exceptionHandlerProvider', 'cfpLoadingBarProvider'];
    /* @ngInject */
    function configure(
        $compileProvider,
        $logProvider,
        exceptionHandlerProvider,
        cfpLoadingBarProvider) {

        $compileProvider.debugInfoEnabled(false);
        $logProvider.debugEnabled(true);
        exceptionHandlerProvider.configure("[APP]");
        //Turn the spinner on or off:
        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = false;
    }
})();
