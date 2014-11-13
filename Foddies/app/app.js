'use strict';

/* App Module */

var phonecatApp = angular.module('foodiesApp', [
  'ngRoute',
]);

phonecatApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        otherwise({
            redirectTo: '/phones'
        });
  }]);
