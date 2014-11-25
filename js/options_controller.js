angular.module('saludApp').controller("OptionsController", ['$scope', function($scope) {
  $scope.states = [
    { id: 1, name: 'Montevideo' },
    { id: 2, name: 'Colonia' },
    { id: 3, name: 'Salto' }
  ];
  $scope.selectedState = $scope.states[0];

  $scope.interests = [
    { id: 0, title: 'Niño - Adolescente', explanation: 'Menor a 15 años'},
    { id: 1, title: 'Mujer Menor de 40 años', explanation: 'Menor de 40 años'},
    { id: 2, title: 'Mujer Mayor de 40 años', explanation: 'Mayor de 40 años y menor de 65 años'},
    { id: 3, title: 'Hombre Menor de 65 años', explanation: 'Menor de 65 años'},
    { id: 4, title: 'Adulto Mayor', explanation: 'Hombre o mujer mayor de 65 años'}
  ];

  $scope.selectedInterest = 0;
}]);
