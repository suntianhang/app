angular.module('myApp')
	.controller('home', ['$scope', '$http', '$location',function($scope, $http,$location) {
		$scope.arr = []
		$http({
			url: 'http://localhost:3333/list/list',
			method: "get",
		}).then(function(data) {
			for(var i = 0; i < data.data.length; i++) {
				$scope.arr.push(data.data[i])
			}
		}, function(data) {
			alert('注册失败')
		})
		$scope.imgSrc=localStorage.img_src
		$scope.out=function(){
			localStorage.clear();
			$location.url('/login')
//			$http({
//				url: 'http://localhost:3333/list/clear',
//				method: "get",
//			}).then(function(data) {
//				localStorage.caller()
//				location.href('login.html')
//			}, function(data) {
//				alert('注册失败')
//			})
		}
		
	}])