angular.module('myApp')
	.controller('home', ['$scope', '$http','$location', function($scope, $http,$location) {
		$scope.arr = []
		$http({
			url: 'http://localhost:3333/list/list',
			method: "get",
		}).then(function(data) {
			
			if(data.data.flag==1){
				console.log('111111111111');
				$location.url('/login');
			}else{
				for(var i = 0; i < data.data.length; i++) {
					$scope.arr.push(data.data[i])
				}
			}
			
		}, function(data) {
			console.log(data)
			alert('注册失败')
		})

	}])