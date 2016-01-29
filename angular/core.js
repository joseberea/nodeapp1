angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newShow = {};
	$scope.shows = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/tvshows').success(function(data) {
		$scope.shows = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a un show
	$scope.registrarShow = function() {
		$http.post('/tvshows', $scope.newShow)
		.success(function(data) {
				$scope.newShow = {}; // Borramos los datos del formulario
				$scope.shows = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de un show
	$scope.modificarShow = function(newShow) {
		$http.put('/tvshows/' + $scope.newShow._id, $scope.newShow)
		.success(function(data) {
				$scope.newShow = {}; // Borramos los datos del formulario
				$scope.shows = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto show conocido su id
	$scope.borrarShow = function(newShow) {
		$http.delete('/tvshows/' + $scope.newShow._id)
		.success(function(data) {
			$scope.newShow = {};
			$scope.shows = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectShow = function(show) {
		$scope.newShow = show;
		$scope.selected = true;
		console.log($scope.newShow, $scope.selected);
	};
}