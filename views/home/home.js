'use strict';

angular.module('javiBertos.home', [
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.tpl.html'
  });
}]);