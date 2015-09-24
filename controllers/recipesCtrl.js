app.controller("recipesCtrl", function($scope, $http) {
	
	$scope.clickModal = function(recipe) {
		$scope.modalRecipe = recipe; 
	}

	$scope.clickTab = function(category) {
		$http.get(category).
    	success(function(data, status, headers, config) {
      		$scope.chosenCategory = data;
    	}).
    	error(function(data, status, headers, config) {
      		// log error
    	});

	}

	$scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.search   = '';     // set the default search/filter term
});