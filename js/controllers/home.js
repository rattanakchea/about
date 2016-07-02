'use strict';

var app = app || {};

app.controller('HomeCtrl', function($scope, ProjectSvc) {

    var preject_url = 'https://dl.dropboxusercontent.com/u/2122820/hosted_json/project.json';
    
    $scope.projects = [];

    $scope.featuredProjects = [];

    ProjectSvc.getProjects().then(function(data){
        //console.log(data.data.projects);  //19 projects
        ProjectSvc.cachedProjects = data.data.projects;
        //console.log('cached: ', ProjectSvc.cachedProjects);
        
        $scope.projects = data.data.projects;
        $scope.featuredProjects = data.data.projects.slice(0, 6);
        //console.log($scope.featuredProjects);

    }, function(err){
        console.log(err);
    })


    //set current project into Project Svc to be used in project detail
    $scope.setCurrentProject = function(index){
        ProjectSvc.currentProject = project;

    }


    // projects page
    $scope.start = 0;
    $scope.itemsPerPage = 6;

    $scope.parse = function(val){
        $scope.itemsPerPage = parseInt(val);
    }

    $scope.prev = function(){
        $scope.start -= $scope.itemsPerPage;
    };

    $scope.next = function(){
        console.log('next');
        if ($scope.canGoNext()){
             $scope.start = $scope.start + $scope.itemsPerPage;
        } else {
            console.log('cant go next');
        }

       
    };

    $scope.canGoNext = function(){
        return $scope.start < $scope.projects.length - $scope.itemsPerPage;
    }

    $scope.canGoBack = function(){
        return $scope.start > 0;
    }


    $scope.buildSlug = function (project){
        if (project.slug) return project.slug;
        else return project.title;
    }


});
