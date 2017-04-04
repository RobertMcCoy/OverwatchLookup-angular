(function() {

    var app = angular.module("playerViewer");

    var MainController = function($scope, $interval, $location) {
        $scope.search = function(username) {
            $location.path("/player/" + username);
        };

        $scope.username = "DirtyBert#11920";
    };

    app.controller("MainController", MainController);

}());