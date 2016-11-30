angular.module('OpenchirpApp', [
  'ngRoute',
  'ngSanitize'
]).config(function ( $routeProvider ) {
  
  'use strict';

  $routeProvider
    .when('/tree', {
      templateUrl: 'views/tree.html',
      controller: 'TreeCtrl',
      controllerAs: 'tree'
    })
    .when('/tree/device/:id', {
      templateUrl: 'views/device.html',
      controller: 'DeviceCtrl',
      controllerAs: 'device'
    })
    .otherwise({
      redirectTo: '/device'
    });
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
