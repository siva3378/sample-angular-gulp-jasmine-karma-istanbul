(function() {
    'use strict';
    angular.module('app.main').directive('appNavbar', appNavbar);
    /** @ngInject */
    function appNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'src/app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
        /** @ngInject */
        function NavbarController(moment, views,config) {
            var vm = this;
            vm.menu = views;
            vm.appName = config.appTitle;
        }
    }
})();