'use strict';

var app = app || {};

app.factory('ProjectSvc', ['$http', '$q', function($http, $q) {

    var preject_url = 'https://dl.dropboxusercontent.com/u/2122820/hosted_json/project.json';


    var svc = {};
    svc.cachedProjects = [];


    svc.getProjects = function() {
        return $http.get(preject_url);
    }

    //return a promise
    svc.retrieveProject = function(index) {
    	var deferred = $q.defer();

    	if (svc.cachedProjects.length > 0 && index >= svc.cachedProjects.length){
    		deferred.reject("Invalid index passed in");
		}
        else if (svc.cachedProjects.length > 0 ) {         
            deferred.resolve(svc.cachedProjects[index]);  //success
        } else {
            init().then(function(){

            	if (index >= svc.cachedProjects.length){
		    		deferred.reject("Invalid index");
				}

            	deferred.resolve(svc.cachedProjects[index]);
            })
        }

        return deferred.promise;  
    }





    function init(index) {
    	console.log('init');
        return svc.getProjects().then(function(data) {
            svc.cachedProjects = data.data.projects;
        });
    }





    return svc;



}]);
