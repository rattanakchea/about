'use strict';

var app = app || {};

app.controller('BlogCtrl', function($scope, $http) {

    var feed_url = 'https://rattanakchea.github.io/my-blog/feed.xml';
    
    
    function getFeeds(){
        return $http({
            method: 'GET', 
            url: feed_url,
            transformResponse: function(xml){
               var x2js = new X2JS();
                return x2js.xml_str2json(xml);
            }
        });
    }

    $scope.posts = '';


    getFeeds().then(function(data){
        
        console.log(data.data.feed.entry);

        $scope.posts = data.data.feed.entry;

    }, function(err ){
        console.log("feed error ", err );
    })

});
