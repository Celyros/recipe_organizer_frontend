'use strict';

angular.module('myApp.recipes', ['ngRoute', 'myApp'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes', {
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'
        });
    }])

    .controller('RecipesCtrl', ['$scope', 'Restangular', 'NumberService', function ($scope, Restangular, NumberService) {
        Restangular.all('recipes').getList().then(function (recipes) {
            $scope.recipes = recipes;
        });

        $scope.deleteRecipe = function (recipeID) {
            Restangular.one('recipes', recipeID).customDELETE().then(function () {
                $location.path('/recipes');
            })
        };

        $scope.num = NumberService.num;

        $scope.setNum = function() {
            NumberService.num = $scope.num;
        };

    }]);