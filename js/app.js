'use strict';
var app = angular.module('myApp', [
  'ngRoute'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/me', {
    templateUrl: 'views/partials/_me.html',
     controller: 'HomeCtrl'
  })
  .when('/projects/:index', {
    templateUrl: 'views/partials/_project-detail.html',
     controller: 'ProjectDetailCtrl'
  })

  .when('/projects', {
    templateUrl: 'views/partials/_projects.html',
    controller: 'HomeCtrl'
  })

   .when('/resume', {
    templateUrl: 'views/partials/_resume.html',
    controller: 'HomeCtrl'
  })

  .otherwise({
    redirectTo: '/'
  });
});