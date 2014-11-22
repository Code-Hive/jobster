'use strict';

/**
 * @ngdoc overview
 * @name angularChimpApp
 * @description
 * # angularChimpApp
 *
 * Main module of the application.
 */
 
 
angular
  .module('angularChimpApp', [
  	'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
