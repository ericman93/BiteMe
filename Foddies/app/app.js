'use strict';

/* App Module */

var ngMap = angular.module('ngMap', []);

var foodiesApp = angular.module('foodiesApp', [
  'ngRoute', 'ngMap',
]);

foodiesApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/meetups', {
            templateUrl: 'partials/meetups.html',
            controller: 'MeetupController'
        }).
        otherwise({
            redirectTo: '/meetups'
        });
  }]);
