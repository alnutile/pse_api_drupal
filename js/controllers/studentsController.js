var studentsController = angular.module('studentsController', []);

studentsController.controller('StudentsController', ['$scope', '$http', '$location', '$route', '$routeParams', 'PSEService', 'MenuService', 'CustomMenuService',
    function($scope, $http, $location, $route, $routeParams, PSEService, MenuService, CustomMenuService){
        var path = Drupal.settings.pse_api.full_path;
        $scope.menu_partial = { name: 'menu', url:'/' + path + '/theme/students_menu.html' }
        $scope.custom_menu_partial = { name: 'custom_menu', url:'/' + path + '/theme/students_custom_menu.html' }
        $scope.students = PSEService.query();
        $scope.menu = MenuService.get({mlid: 421});

        $scope.custom_block = CustomMenuService.get({name:'menu-student-of-interest'});

        $scope.getSize = function(obj) {
            if(typeof(obj) === 'object') {
                return Object.keys(obj).length;
            } else {
                return false;
            }
        }
    }]);
