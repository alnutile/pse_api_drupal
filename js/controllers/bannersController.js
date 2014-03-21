var bannersController = angular.module('bannersController', []);

bannersController.controller('BannersController', ['$scope', '$http', '$location', '$route', '$routeParams', 'BannerService',
    function($scope, $http, $location, $route, $routeParams, BannerService){
        $scope.interval = 10000;
        $scope.slides = BannerService.query();

    }]);
