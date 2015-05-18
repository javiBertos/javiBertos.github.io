'use strict';

// Declare app level module which depends on views, and components
angular.module('javiBertos', [
  'ngRoute',
  'javiBertos.home',
  'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('MainApp', function($scope,$mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
});
