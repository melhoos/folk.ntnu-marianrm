
app.controller("aboutCtrl", function($scope) {

	$scope.showEducation = true;
	$scope.showWorkExperience = true;
	$scope.showMiscellaneous = true;
	$scope.showAboutMe = false;

	$scope.showAboutMeButton = function() {
		$scope.showWorkExperience = true;
		$scope.showMiscellaneous = true;
		$scope.showEducation = true;
		$scope.showAboutMe = false;
	}

	$scope.showEducationButton = function() {
		$scope.showWorkExperience = true;
		$scope.showMiscellaneous = true;
		$scope.showAboutMe = true;
		$scope.showEducation = false;
	}

	$scope.showWorkExperienceButton = function() {
		$scope.showEducation = true;
		$scope.showMiscellaneous = true;
		$scope.showAboutMe = true;
		$scope.showWorkExperience = false;
	}

	$scope.showMiscellaneousButton = function() {
		$scope.showEducation = true;
		$scope.showWorkExperience = true;
		$scope.showAboutMe = true;
		$scope.showMiscellaneous = false;

	}

});