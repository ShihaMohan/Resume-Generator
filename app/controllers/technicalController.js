myApp.controller('technicalController', ['$scope', function($scope) {
  $scope.isDisabled = true;
  $scope.techsave = function(objective, tech_skills, projectdetails, achievements) {
    localStorage.objective = objective;
    localStorage.skills = tech_skills;
    localStorage.project = projectdetails;
    localStorage.achievements = achievements;
    $scope.isDisabled = false;
  }
  $scope.nextform = function() {
    location.href = "#/resumebutton";
  }
}]);