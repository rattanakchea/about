'use strict';

var app = app || {};

app.factory('ProjectSvc', ['$http', '$q', 'CONFIG', function($http, $q, CONFIG) {

    var svc = {};
    svc.cachedProjects = [];

    svc.getProjects = function( URI ) {
        return $http.get( URI );
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
        return svc.getProjects(CONFIG.PROJECT_URI).then(function(data) {
            svc.cachedProjects = data.data.projects;
        });
    }

    svc.buildSlug = function (project){
        if (project.slug) return project.slug;
        else return project.title;
    }


    return svc;



}]);
