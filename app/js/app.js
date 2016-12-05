angular.module('OpenChirpApp', [
  'ngRoute',
  'ngSanitize'
]).config(function ( $routeProvider ) {
  
  'use strict';

  $routeProvider
    .when('/tree', {
      templateUrl: 'views/tree.html',
      controller: 'TreeCtrl'
    })
    .when('/tree/device/:id', {
      templateUrl: 'views/device.html',
      controller: 'DeviceCtrl'
    })
    .otherwise({
      redirectTo: '/tree'
    });
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
