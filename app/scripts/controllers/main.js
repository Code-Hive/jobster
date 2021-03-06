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
  .controller('MainCtrl', function($scope, $firebase) {
  
  var ref = new Firebase('https://jobster.firebaseio.com/jobs');
  
  var sync = $firebase(ref);
  
  $scope.jobs = sync.$asArray();
  
});
