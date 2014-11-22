'use strict';

/**
 * @ngdoc function
 * @name angularChimpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularChimpApp
 */
angular.module('angularChimpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
