myApp.controller('educationFormController', ['$scope', function($scope) {
  $scope.isDisabled = true;
  $scope.educationsave = function(qualification, board, grade, year) {
    localStorage.qualification = qualification;
    localStorage.board = board;
    localStorage.grade = grade;
    localStorage.year = year;
    $scope.isDisabled = false;
  }
  $scope.next = function() {
    location.href = "#/techform";
  }
}]);