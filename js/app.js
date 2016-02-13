'use strict';
var app = angular.module('appName', [
  'ngRoute'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});