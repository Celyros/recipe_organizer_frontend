'use strict';

angular.module('myApp.recipeDetail', ['ngRoute', 'myApp'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipe-detail/recipe-detail.html',
    controller: 'RecipeDetailCtrl'
  });
}])

.controller('RecipeDetailCtrl', ['$scope', 'Restangular', '$routeParams', '$location', 'NumberService' function($scope, Restangular, $routeParams, $location, NumberService) {

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

        $scope.deleteRecipe = function() {
        var confirmation = confirm('Are you sure you want to delete this recipe? This cannot be undone');

        if (confirmation) {
            Restangular.one('recipes', $scope.recipeId).customDELETE().then(function() {
                alert('Your recipe was successfully deleted!');
                $location.path('/recipes');
            },
            function() {
                alert('There was a problem deleting your recipe')
            })
        }
    }
}]);