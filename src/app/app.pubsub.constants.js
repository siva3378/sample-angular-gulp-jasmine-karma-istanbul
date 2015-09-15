/* global toastr:false, moment:false */
(function () {
    'use strict';
    angular
            .module('app.main')
            //These publish-subscribe keys are used throught the app
            .constant('appEvents', {
                SEARCH_TODO:'SEARCH_TODO'
            });
            
})();