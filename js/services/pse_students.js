'use strict';

var pseServices = angular.module('pseServices', ['ngResource']);

pseServices.factory('PSEService', ['$resource',
    function($resource){
        return $resource('http://33.33.33.1:8000/api/v1/students/current', {}, {
            query: {method:'GET', params: {}, isArray:true}
        });
    }]);