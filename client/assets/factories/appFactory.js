//BLANK CLIENT FACTORY

blankApp.factory("appFactory", ["$http", "$cookies", function($http, $cookies){
	function factoryMethods(){
		console.log("appFactory loaded...");

		this.registerUser = function(userInfo, callback){
			console.log("Factory sending out:", userInfo);
			$http.post("/register_user/", userInfo).then(function(returnedData){
				callback(returnedData);
			});
		};
		this.loginUser = function(userInfo, callback){
			console.log("Factory sending out", userInfo);
			$http.post("/login_user/", userInfo).then(function(returnedData){
				console.log("Factory return is:", returnedData);
				callback(returnedData);
			})
		}
	};
	return new factoryMethods;
}]);