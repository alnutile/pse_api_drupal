var bannersController = angular.module('bannersController', []);

bannersController.controller('BannersController', ['$scope', '$http', '$location', '$route', '$routeParams', 'BannerService',
    function($scope, $http, $location, $route, $routeParams, BannerService){
        $scope.interval = 3000;
        $scope.slides = BannerService.query();

    }]);
