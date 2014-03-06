angular.module('pseApi', []).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:CurrentStudents, templateUrl: Drupal.settings.angularjsApp.basePath + '/pse_api/templates/current-students'}).
      otherwise({redirectTo:'/'});
  });

function CurrentStudents($scope) {
  // Init local cache.
  $scope.cache = {};

  var currentClass = this.constructor.name;
  // Set defaule values.
  if (!Drupal.settings.angularjs.hasOwnProperty(currentClass)) {
    return;
  }

  var values = Drupal.settings.angularjs[currentClass];
  angular.forEach(values, function(value, key) {
    $scope[key] = value;
  });


}
