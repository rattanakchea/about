'use strict';

var app = app || {};

app.directive('myWork', ['$location', 'ProjectSvc', function($location, ProjectSvc) {
	return {
      restrict: 'E',
      templateUrl: '/js/directives/project.html',
      scope: {
        work: "="
      },
      link: function(scope, element, attrs){

      	scope.setCurrentProject = function (work){
      		console.log(work);
      		ProjectSvc.currentWork = work;
      		var path = "/projects/" + work.slug;
      		$location.path(path);	
      	}
      }
    };

}]);
