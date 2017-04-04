(function(){
    
    var app = angular.module("playerViewer", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/player/:username", {
                templateUrl: "player.html",
                controller: "PlayerController"
            })
            .otherwise({redirectTo:"/main"});
    });
    
}());