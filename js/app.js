'use strict';
var app = angular.module('appName', ['ngRoute', 'deviceskin']);

//constant configs
app.constant("CONFIG", {
    PROJECT_URI: 'https://dl.dropboxusercontent.com/u/2122820/rattanakchea.github.io/personal-projects.json',
    WORK_URI: 'https://dl.dropboxusercontent.com/u/2122820/rattanakchea.github.io/work-projects.json'
});

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
  .when('/projects/:slug', {
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
   .when('/blog', {
    templateUrl: 'views/partials/_blog.html',
    controller: 'BlogCtrl'
  })

  .otherwise({
    redirectTo: '/'
  });
});