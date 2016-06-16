describe('Project Service', function() {
    beforeEach(module('myApp'));

    var ProjectSvc, $httpBackend;

    var $q, $rootScope;

    beforeEach(inject(function(_ProjectSvc_, _$httpBackend_, _$q_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        ProjectSvc = _ProjectSvc_;
        $httpBackend = _$httpBackend_;
        $q = _$q_;

        $rootScope = _$rootScope_;

        spyOn(ProjectSvc, 'retrieveProjectBySlug').and.callFake(function(){
            var defer = $q.defer();
            defer.resolve();
            return defer.promise;
        });

    }));


    describe('$httpBackend ', function() {
        it('get request test', function() {
            $httpBackend.expectGET('/');
        });
    });


    describe('Project Service exists ', function() {
        it('should exist', function() {
            expect(ProjectSvc).toBeDefined();
        });
    });


    describe('.retrieveProjectBySlug()', function() {
        it('test promise in service', function() {

            // spyOn(ProjectSvc, 'retrieveProjectBySlug').and.callFake(function() {
            //     var deferred = $q.defer();
            //     //deferred.reject();
            //     return deferred.promise;
            // });

           //expect(ProjectSvc.retrieveProjectBySlug).toHaveBeenCalled();

          var project_url = 'https://dl.dropboxusercontent.com/u/2122820/hosted_json/project.json';

               $httpBackend.expectGET(project_url).respond(200, {data: null});
        

          
         console.log('-------------');
           var project;
          ProjectSvc.retrieveProjectBySlug('monopoly-checker').then(function(data){
             project = data;
             console.log(project);
             //$rootScope.$apply();
             console.log('project', project);

             
            });

        //   $rootScope.$digest();
        //$httpBackend.flush();

    
         expect(project.length).toBe(1);

           // $httpBackend.flush();
         
        });
    });
});
