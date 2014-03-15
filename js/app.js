'use strict';


var pse_api = angular.module('pseApi', [
    'ngRoute',
    'pseServices',
    'studentsController',
    'bannerService',
    'menuService',
    'customMenuService',
    'ui.bootstrap',
    'bannersController'
]);

pse_api.config(['$routeProvider',
    function ($routeProvider) {
        var path = Drupal.settings.pse_api.full_path;
        $routeProvider.
            when('/', {
               templateUrl: '/' + path + '/theme/current-students-table.html',
               controller:  'StudentsController'
            }).
            when('/current-students', {
                templateUrl: '/' + path + '/theme/current-students-table.html',
                controller: 'StudentsController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
