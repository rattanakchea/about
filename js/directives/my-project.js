'use strict';

var app = app || {};

app.directive('myProject', function(ProjectSvc, $location) {
	return {
      restrict: 'E',
      templateUrl: '/js/directives/project.html',
      scope: {
        project: "=",
        slug: "="
      }, 
      link: function(scope, element, attrs){
      	scope.setCurrentProject = function (project){
            console.log('set current project');
      		ProjectSvc.currentWork = project;
      		var path = "/projects/" + ProjectSvc.buildSlug(project);
      		$location.path(path);
      	},

        //get project image called in directive html file
        scope.getProjectImage = function(image) {
          return image || 'https://placehold.it/360x207?text=NotAvailable';
        };
      }
    };

});
