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
      		console.log(project);
      		ProjectSvc.currentWork = project;
      		var path = "/projects/" + ProjectSvc.buildSlug(project);
      		$location.path(path);	
      	},

        //get project image
        scope.getProjectImage = function(image) {
          //console.log('here', image);
          return image || 'https://placehold.it/360x207?text=NotAvailable';
        };
      }
    };

});
