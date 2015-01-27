'use strict';

angular.module('myApp.recipeDetail', ['ngRoute', 'myApp'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes/:recipeId', {
            templateUrl: 'recipe-detail/recipe-detail.html',
            controller: 'RecipeDetailCtrl'
        });
    }])

    .controller('RecipeDetailCtrl', ['$scope', 'Restangular', '$routeParams', 'NumberService', function ($scope, Restangular, $routeParams, NumberService) {

        $scope.recipeId = $routeParams.recipeId;

        Restangular.one('recipes', $scope.recipeId).customGET().then(function (data) {
            $scope.recipe = data;
        });

        // Load the data from the service.
        $scope.num = NumberService.num;

        // Save the data into the service.
        $scope.setNum = function () {
            NumberService.num = $scope.num;
        };

    }]);