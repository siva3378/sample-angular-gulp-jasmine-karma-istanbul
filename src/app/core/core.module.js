(function () {
    'use strict';

    angular
        .module('app.core', [
                /* Angular modules */
                'ngSanitize',
                'ngRoute',

                /* 3rd-party modules */
                'ui.bootstrap',
                'ui.sortable',
                'angular-loading-bar',

                /* Re-usable components*/
                'app.commons'
            ]);

})();
