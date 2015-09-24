var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/frontpage.html',
		controller: 'frontpageCtrl'
	})
	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl'
	})
	.when('/recipes', {
		templateUrl: 'views/recipes.html',
		controller: 'recipesCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

