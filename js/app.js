var app = angular.module('saludApp', ['saludApp.filters', 'ui.bootstrap', 'highcharts-ng']);

app.controller("ListController", ['$scope', '$http', function($scope, $http) {
  $scope.seleccionadas = [];
  url = 'data/' + $scope.selectedState.name.toLowerCase() + '.json';
  $http.get(url)
    .then(function(result) {
      $scope.mutualistas = result.data;
      $scope.predicate = "META_ADOLESCENTE";
    }, function(error) {
      console.log("couldn't read " + $scope.selectedState.name + ".json");
    });

  $scope.reOrder = function(predicate) {
    $scope.predicate = predicate;
    $scope.reverse = !$scope.reverse;
  }

  $scope.toggleSelected = function(mutualista) {
    mutualista.selected = !mutualista.selected;
    if (mutualista.selected) {
      $scope.seleccionadas.push(mutualista);
    } else {
      index = $scope.seleccionadas.indexOf(mutualista);
      $scope.seleccionadas.splice(index, 1);
    }
  }
}]);

