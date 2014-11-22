'use strict';

/**
 * @ngdoc function
 * @name angularChimpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularChimpApp
 */
angular.module('angularChimpApp')
  .controller('AddCtrl', function ($scope, $firebase) {
  
  var ref = new Firebase('https://jobster.firebaseio.com/jobs');
  
  var sync = $firebase(ref);
  
  $scope.jobs = sync.$asArray();  
  
  $scope.addJob = function() {
    $scope.jobs.$add({
    	title: $scope.jobTitle, 
    	salary: $scope.jobSalary,
        type: $scope.jobType,
        copy: $scope.jobCopy
    	});
    $scope.jobTitle= '';
    $scope.jobType= '';
    $scope.jobSalary= '';
    $scope.jobCopy= '';
  };
    
  });
