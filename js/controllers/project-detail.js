'use strict';

var app = app || {};

app.controller('ProjectDetailCtrl', function($scope, ProjectSvc, $routeParams, data) {

    var slug = $routeParams.slug;
    //console.log('route:', slug);

    if (ProjectSvc.currentWork) {
        $scope.currentProject = ProjectSvc.currentWork;
    } else {

        console.log('ProjectDetail Ctrl: look up project detail');

        $scope.currentProject = _.find(data.data.projects, function(project){
            return project.slug === slug || project.title === slug;
        });
    }


});
