'use strict';

var app = app || {};

app.controller('ProjectDetailCtrl', function($scope, ProjectSvc, $routeParams) {

    var projectIndex = $routeParams.index;

    console.log('project slug: ', projectIndex);


    ProjectSvc.retrieveProjectBySlug(projectIndex).then(success, fail);

    function success(data){
        $scope.currentProject = data;
        console.log('success');
    }

    function fail(err){
        console.log(err)
        $scope.currentProject = err.data;
    }





});
