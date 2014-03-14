'use strict';

var bannerService = angular.module('bannerService', ['ngResource']);

bannerService.factory('BannerService', ['$resource',
    function($resource){
        return $resource('/api/v1/banners', {}, {
            query: {method:'GET', params: {}, isArray:true}
        });
    }]);