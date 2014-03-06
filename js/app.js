'use strict';

var pse_api = angular.module('pse_api', [
    'ngRoute',
    'studentsController',
    'ngSanitize',
    'ngTable'
]);

pse_api.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/current-students', {
                templateUrl: '/pse_api/templates/current-students',
                controller: 'studentsController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
