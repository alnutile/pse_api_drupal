'use strict';

var customMenuService = angular.module('customMenuService', ['ngResource']);

customMenuService.factory('CustomMenuService', ['$resource',
    function($resource){
        return $resource('/api/v1/custom_blocks/:name', {}, {
            query: {method:'GET', params: { name: 'NONE'}, isArray:true}
        });
    }]);