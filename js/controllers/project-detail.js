'use strict';

var app = app || {};

app.controller('ProjectDetailCtrl', function($scope, ProjectSvc, $routeParams) {

    

    var projectIndex = $routeParams.index;

    console.log('project index: ', projectIndex);


    ProjectSvc.retrieveProject(projectIndex).then(success, fail);

    function success(data){
        $scope.currentProject = data;
    }

    function fail(err){
        console.log(err)
    }





});
