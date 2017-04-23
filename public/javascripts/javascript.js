angular.module('myApp')
	.controller('jsjs', ['$scope', '$http', function($scope, $http) {
		$scope.arr = []
		$http({
			url:'http://localhost:3333/jsjs/jsjs',
			method: "get",
		}).then(function(data) {
			console.log(data)
		}, function(data) {
			console.log(data)
		})

	}])