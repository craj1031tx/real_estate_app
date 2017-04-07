//BLANK CLIENT VIEWCONTROLLER

blankApp.controller("loginController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
	console.log("loginController loaded...");

	$scope.register=function(){
		appFactory.registerUser($scope.newUserInfo, function(returnedData){
			if(returnedData.data.errors){
				$scope.listOfErrors = [];
				for(var key in returnedData.data.errors){
					if (!returnedData.data.errors.hasOwnProperty(key)) continue;
					var err = returnedData.data.errors[key];
					$scope.listOfErrors.push(err.message);
				};
				console.log($scope.listOfErrors);
			};
		});
	};
	$scope.login=function(){
		appFactory.loginUser($scope.loginInfo, function(returnedData){
			if(returnedData.data.errors){
				$scope.listOfErrors = [];
				for(var key in returnedData.data.errors){
					$scope.listOfErrors.push(returnedData.data.errors[key]);
				};
				console.log($scope.listOfErrors);
			};
		})
	}
}]);