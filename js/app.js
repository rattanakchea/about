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
  .when('/me', {
    templateUrl: 'views/partials/_me.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});