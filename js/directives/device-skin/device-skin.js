'use strict';

var app = app || {};

app.directive('deviceSkin', function() {
	return {
      restrict: 'E',
      templateUrl: '/js/directives/device-skin/device-skin.html',
      scope: {
        bgImage: "=",
        width: "="
      }, 
      link: function(scope, element, attrs){
      	
      }
    };

});
