'use strict';

var app = app || {};

app.directive('deviceSkin', function() {
	return {
      restrict: 'E',
      templateUrl: '/js/directives/device-skin.html',
      scope: {
        backgroundImage: "=",
        width: "="
      }, 
      link: function(scope, element, attrs){
      	
      }
    };

});
