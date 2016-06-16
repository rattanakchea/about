
describe('HomeController', function() {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe(':number of projects', function() {
    it('- should add a project to scope.featuredProjects', function() {
      var $scope = {};
      var controller = $controller('HomeCtrl', { $scope: $scope });

      $scope.featuredProjects.push({title: 'testing Angular Ctrl'});

      expect($scope.featuredProjects.length).toEqual(1);
    });
  });
});