/**
 * Created by celyros on 1/28/15.
 */
'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', 'Restangular', 'NumberService','$location', '$anchorScroll', function ($scope, Restangular, NumberService, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        }

    }]);