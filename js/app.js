'use strict';
var app = angular.module('appName', ['ngRoute', 'deviceskin']);

//constant configs
app.constant("CONFIG", {
    PROJECT_URI: 'js/data/myProjects.json',
    WORK_URI: 'js/data/work-projects.json'
});

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home',  //default to index.html inside views/home folder
    controller: 'HomeCtrl'
  })
  .when('/me', {
    templateUrl: 'views/home/_me.html',
     controller: 'HomeCtrl'
  })
  .when('/projects/:slug', {
      templateUrl: 'views/partials/_project-detail.html',
      controller: 'ProjectDetailCtrl',
      resolve: {
        data: function(ProjectSvc){
          return ProjectSvc.getProjects();
        }
      }
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