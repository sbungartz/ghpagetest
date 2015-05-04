var module = angular.module('ghpagetest', ['ui.bootstrap', 'ngRoute', 'ngStorage']);

module.config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {
//$locationProvider.html5Mode(true); // Remove the '#' from URL.
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
  $routeProvider.when('/', {
    templateUrl: 'res/home.html'
  }).when('/sub1', {
    templateUrl: 'res/sub1.html'
  }).when('/sub1/subsub', {
    templateUrl: 'res/sub1subsub.html'
  }).otherwise({
    redirectTo: '/'
  });
}]);


module.controller('HeaderController', function($scope, $location) {
  $scope.isRoute = function(path) {
    return $location.path() == path;
  };

  $scope.isRouteOrBelow = function(prefix) {
    return $location.path().startsWith(prefix);
  };
});

