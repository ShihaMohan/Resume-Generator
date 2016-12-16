myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'personalform.html',
      controller: 'personalFormController'
    })
    .when('/eduform', {
      templateUrl: 'educationform.html',
      controller: 'educationFormController'
    })
    .when('/techform', {
      templateUrl: 'technicalform.html',
      controller: 'technicalController'
    })
    .when('/resumebutton', {
      templateUrl: 'resumegenerate.html',
      controller: 'generateController'
    })
    .when('/resume', {
      templateUrl: 'resume.html',
      controller: 'resumeController'
    })
});