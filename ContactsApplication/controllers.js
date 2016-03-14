myApp.controller('ContactsController', function($scope) {

  $scope.contacts = [
    {id: 1, name: 'John', email: 'john@example.com'},
    {id: 2, name: 'Harsh', email: 'harsh@example.com'},
    {id: 3, name: 'Bharath', email: 'bharath@example.com'}
  ];

  $scope.add = function(newContact) {
  };

  $scope.delete = function(contact) {

  }
});

myApp.controller('CalculatorController', function($scope) {

});
