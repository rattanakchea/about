'use strict';

var app = app || {};

app.directive('myProject', [function() {
	return {
      restrict: 'E',
      templateUrl: '/views/partials/_project.html',
      scope: {
        project: "=",
        slug: "="
      }
    };

}]);
