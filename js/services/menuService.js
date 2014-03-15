'use strict';

var menuService = angular.module('menuService', ['ngResource']);

menuService.factory('MenuService', ['$resource',
    function($resource){
        return $resource('/api/v1/menu/:mlid', {}, {
            query: {method:'GET', params: { mlid: 'NONE'}, isArray:true}
        });
    }]);