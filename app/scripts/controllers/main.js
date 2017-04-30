'use strict';

/**
 * @ngdoc function
 * @name henryhomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the henryhomeApp
 */
angular.module('henryhomeApp')
  .controller('MainCtrl', function ($rootScope) {
    var bodyClasses = [
        'diamonds',
        'bubbles',
        'horizon',
        'motes',
        'wallpaper'
    ]
    $rootScope.bodyClass = bodyClasses[Math.floor(Math.random()*bodyClasses.length)];
  });
