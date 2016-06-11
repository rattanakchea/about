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

    function lookUp(slug) {
        for (var i=0; i < svc.cachedProjects.length; i++){
            if (svc.cachedProjects[i].slug && svc.cachedProjects[i].slug == slug) {
                return svc.cachedProjects[i];
            } else if (svc.cachedProjects[i].title == slug) {
                return svc.cachedProjects[i];
            
            }
        }
        return null;
    }

    //return a promise
    svc.retrieveProjectById = function(id) {
        var deferred = $q.defer();
       
        if (svc.cachedProjects.length > 0 ) {    
             var found = lookUp(id);
                if (!found) {
                    deferred.reject ({error: 'not found', data: null});
                } else {
                    deferred.resolve(found);
                }

        } else {
            init().then(function(){
                var found = lookUp(id);
                //console.log('found: ', found);
                if (!found) {
                    deferred.reject ({error: 'not found', data: null});
                } else {
                     deferred.resolve(found);
                }
            })
        }

        return deferred.promise;  
    }

     //return a promise
    svc.retrieveProjectBySlug = function(slug) {
       return svc.retrieveProjectById(slug)
    }



    function init(index) {
    	console.log('init');
        return svc.getProjects().then(function(data) {
            svc.cachedProjects = data.data.projects;
        });
    }





    return svc;



}]);
