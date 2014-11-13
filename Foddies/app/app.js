'use strict';

/* App Module */

var ngMap = angular.module('ngMap', []);

var foodiesApp = angular.module('foodiesApp', [
  'ngRoute', 'ngMap', 'ui.bootstrap'
]);

foodiesApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/meetups', {
            templateUrl: 'partials/meetups.html',
            controller: 'MeetupController'
        }).
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        }).
        otherwise({
            redirectTo: '/meetups'
        });
  }]);
