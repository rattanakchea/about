'use strict';

var app = app || {};

app.controller('WorkCtrl', function($scope, ProjectSvc, CONFIG ) {

    $scope.projects = [];
    $scope.featuredProjects = [];

    ProjectSvc.getProjects( CONFIG.WORK_URI ).then(function(data){
        //console.log(data.data.projects);  //19 projects
        //ProjectSvc.cachedProjects = data.data.projects;
             
        
        data.data.projects.sort(function() { return 0.5 - Math.random() });
        
        console.log(data.data.projects);
        $scope.featuredWorkProjects = data.data.projects.slice(0, 3);
        
        //shuffle
        $scope.featuredWorkProjects;

    }, function(err){
        console.log(err);
    })

});
