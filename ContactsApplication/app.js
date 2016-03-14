var myApp = angular.module('contacts', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/calculator', {
      templateUrl: 'templates/calculator.html',
      controller: 'CalculatorController'
    })
    .when('/contacts', {
      templateUrl: 'templates/contacts.html',
      controller: 'ContactsController'
    })
    .otherwise({
      redirectTo: '/calculator'
    });
}]);
