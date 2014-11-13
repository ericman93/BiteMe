'use strict';

/* App Module */

var foodiesApp = angular.module('foodiesApp', [
  'ngRoute',
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
