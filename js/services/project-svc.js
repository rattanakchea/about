'use strict';

var app = app || {};

app.factory('ProjectSvc', ['$http', function($http) {

    var preject_url = 'https://dl.dropboxusercontent.com/u/2122820/hosted_json/project.json';


    var svc = {};

    svc.getProjects = function(){
    	return $http.get(preject_url);
    }


    return svc;



}]);
