'use strict';

var app = app || {};

app.factory('ProjectSvc', ['$http', '$q', 'CONFIG', function($http, $q, CONFIG) {

    var svc = {};
    svc.cachedProjects = [];

    svc.getProjects = function() {
        return $http.get( CONFIG.PROJECT_URI );
    };


    //Todo
    svc.getProjectBySlug = function(slug) {
        return this.getProjects().then(function(data){
            _.find(data.data.projects, function(project){
                return project.slug === slug || project.title === slug;
            });
        })

    };



    //used in my-project.js directive
    svc.buildSlug = function (project){
        return project.slug || project.title;
    };


    return svc;



}]);
