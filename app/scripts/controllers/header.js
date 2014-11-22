'use strict';
/*global Firebase */
/**
 * @ngdoc function
 * @name angularChimpApp.controller:AboutCtrl
 * @description	
 * # AboutCtrl
 * Controller of the angularChimpApp
 */
angular.module('angularChimpApp')
  .controller('HeaderCtrl', function($scope, $location) {
  
  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  
});
