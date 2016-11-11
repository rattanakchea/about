(function() {
    'use strict';

    angular.module('deviceskin', [])
        .directive('deviceSkin', ['$window', function($window) {
            return {
                restrict: 'E',
                templateUrl: 'bower_components/deviceskin/device-skin.html',
                scope: {
                    bgImage: "=",
                },
                link: function(scope, element, attrs) {
                    scope.getDeviceBG = function(){
                        //console.log(attrs);
                        //console.log(scope);
                        if (attrs.deviceType) {
                             return 'bower_components/deviceskin/img/' + attrs.deviceType + '-skin.png';
                         }
                    };
                }
            };

        }]);
})();
