var myApp = angular.module('myapp', ['ngRoute']);
myApp.controller('personalFormController', ['$scope', function($scope) {
  $scope.isDisabled = true;
  $scope.save = function(Name, address, number, email) {
    localStorage.name = Name;
    localStorage.address = address;
    localStorage.number = number;
    localStorage.email = email;
    $scope.isDisabled = false;
  }
  $scope.redirect = function() {
    location.href = "#/eduform";
  }
}]);