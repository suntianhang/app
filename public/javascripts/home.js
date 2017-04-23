angular.module('myApp')
	.controller('home', ['$scope', '$http', function($scope, $http) {
		$scope.arr = []
		$http({
			url: 'http://localhost:3333/list/list',
			method: "get",
		}).then(function(data) {
			console.log(data)
			for(var i = 0; i < data.data.length; i++) {
				$scope.arr.push(data.data[i])
			}
			console.log($scope.arr)
		}, function(data) {
			console.log(data)
			alert('注册失败')
		})

	}])