'use strict';

var app = app || {};

app.controller('ProjectDetailCtrl', function($scope, ProjectSvc, $routeParams) {

    var slug = $routeParams.slug;


    if (ProjectSvc.currentWork) {
        $scope.currentProject = ProjectSvc.currentWork;
    } else {
        ProjectSvc.retrieveProjectBySlug(slug).then(success, fail);

        function success(data) {
            $scope.currentProject = data;
            console.log('success');
        }

        function fail(err) {
            console.log(err)
            $scope.currentProject = err.data;
        }
    }


});
