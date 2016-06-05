'use strict';

var app = app || {};

app.controller('HomeCtrl', function ($scope, $http) {

    var base_url  = 'http://localhost:8000/api';
    
    $scope.apiURL = base_url;
    
    
    getItems();
    
    function getItems(){
        $http.get(base_url + '/items').then(function(items){
        
        $scope.items = items.data;
        console.log(items.data);
    }, function(err){
        console.log(err);
    });
    }
    
    
    
    $scope.postItem = function(item){
        //valid item
        console.log(item);
        $http.post(base_url + '/items', item).then(function(msg){
            console.log(msg.data);
            
             getItems();
            
            }, function(err){
            console.log(err);
        });
        
    }
	
});