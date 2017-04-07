//BLANK ANGULAR APP

var blankApp = angular.module("blankApp", ["ngRoute", "ngCookies"]);

blankApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl:"/partials/loginPartial.html",
		controller: "loginController"
	})
	.when("/blank", {
		templateUrl:"/partials/blankPartial.html",
		controller: "blankController"
	})
	.otherwise({redirectTo:"/"})
})