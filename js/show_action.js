angular.module("saludApp.filters", [])
.filter('showAction', function() {
  return function(input) {
    return (input) ? "Remover" : "Agregar";
  }
})
