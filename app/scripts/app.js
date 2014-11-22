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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
