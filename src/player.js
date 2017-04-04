(function(){
    
    var player = function($http){
      var getUser = function(username){
            return $http.get("https://owapi.net/api/v3/u/" + username.replace("#", "-") + "/blob")
                        .then(function(response){
                           return response.data; 
                        });
      };
      
      return {
          getUser: getUser
      };
    };
    
    var module = angular.module("playerViewer");
    module.factory("player", player);

}());