var studentsController = angular.module('studentsController', []);

studentsController.controller('StudentsController', ['$scope', '$http', '$location', '$route', '$routeParams', 'PSEService',
    function($scope, $http, $location, $route, $routeParams, PSEService){
        $scope.students = PSEService.query();
    }]);
