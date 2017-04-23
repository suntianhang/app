angular.module('myApp')
	.controller('a1', ['$scope', '$http', function($scope, $http) {
$scope.content = ''
$scope.head = ''
$scope.type = ''
		$scope.odd = function() {
			var oDate = new Date();
			function toDub(a){
				return a>10 ? ''+a : '0'+a;
			}
			var str = toDub(oDate.getFullYear())+toDub(oDate.getMonth()+1)+toDub(oDate.getDate())+toDub(oDate.getHours())+toDub(oDate.getMinutes())+toDub(oDate.getSeconds());
			console.log(str)
			$http({
				url: 'http://localhost:3333/list/fabu',
				method: "post",
				data:"type="+$scope.type +"&content="+$scope.content +"&headline=" +$scope.head+"&times=" +str,
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
			}).then(function(data) {
				console.log(data)
			}, function(data) {
				console.log(data)
			})
		}
	}])