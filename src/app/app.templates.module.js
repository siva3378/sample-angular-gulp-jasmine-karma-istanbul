(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/components/navbar/navbar.html',
    '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n' +
    '    <div class="container">\n' +
    '        <a class="navbar-brand" href="#">{{vm.appName}}</a>\n' +
    '        <ul class="nav navbar-nav">\n' +
    '            <li ng-repeat="item in vm.menu">\n' +
    '                <a ng-href="{{item.base}}" ng-bind="item.name"></a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <p class="navbar-text">Sample angular app to demo Unit Testing with Jasmine & Karma</p>\n' +
    '    </div>\n' +
    '</nav>');
}]);
})();
