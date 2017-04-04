(function() {

    var app = angular.module("playerViewer");

    var PlayerController = function($scope, player, $log, $routeParams) {

        var onUserComplete = function(data) {
            $scope.heroes = [];
            angular.forEach(data.us.heroes.playtime.competitive, function(key, value) {
                $scope.heroes.push([value, key]);
            })
            $scope.data = data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the data.";
        };
        $scope.$log = $log;
        $scope.username = $routeParams.username;
        player.getUser($scope.username).then(onUserComplete, onError);

    };

    app.controller("PlayerController", PlayerController);

}());