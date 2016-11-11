'use strict';

var app = app || {};

app.controller('HomeCtrl', function($scope, ProjectSvc) {
    
    $scope.projects = [];

    $scope.featuredProjects = [];

    ProjectSvc.getProjects().then(function(data){
        //console.log(data.data.projects);  //19 projects
        ProjectSvc.cachedProjects = data.data.projects;
        //console.log('cached: ', ProjectSvc.cachedProjects);
        
        $scope.projects = data.data.projects;


        //use underscore find {"featured": true}
        $scope.featuredWorkProjects = data.data.projects.slice(0, 3);


        $scope.featuredWorkProjects = _.where(data.data.projects, {featured: true});

        $scope.featuredProjects = data.data.projects.slice(0, 6);
        //console.log($scope.featuredProjects);


    }, function(err){
        console.log(err);
    });


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
    };

    $scope.canGoBack = function(){
        return $scope.start > 0;
    };

});
