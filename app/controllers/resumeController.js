myApp.controller('resumeController', ['$scope', function($scope) {
  $scope.name = localStorage.name;
  $scope.address = localStorage.address;
  $scope.number = localStorage.number;
  $scope.email = localStorage.email;
  $scope.qualification = localStorage.qualification;
  $scope.board = localStorage.board;
  $scope.grade = localStorage.grade;
  $scope.year = localStorage.year;
  $scope.tech_skills = localStorage.skills;
  $scope.project = localStorage.project;
  $scope.achievements = localStorage.achievements;
  $scope.objective = localStorage.objective;
}]);