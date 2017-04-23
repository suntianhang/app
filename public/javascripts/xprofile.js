angular.module('myApp')
.controller('xprofile',['$scope','$http',function($scope,$http){
	$scope.a=true;
	$scope.b=false;
	$scope.gengxin=true;
	$scope.qrgengxin=false;
	$scope.all=true;
	$scope.name=0;
	//编辑资料和修改密码的切换
	$scope.bj=function(){
		$scope.a=true;
		$scope.b=false;
		$scope.name=0;
	}
	$scope.xg=function(){
		$scope.a=false;
		$scope.b=true;
		$scope.name=1;
	}
	//更新和确认更新的切换
	$scope.gx=function(){
		$scope.gengxin=false;
		$scope.qrgengxin=true;
		$scope.all=false;
	}
	$scope.qrgx=function(){
		$scope.gengxin=true;
		$scope.qrgengxin=false;
		$scope.all=true;
		alert($scope.qq)
	}
	
	//获取资料
//	$http({
//		url:'',
//		method:'get',
//		params:{
//			
//		}
//	}).then(function(data){
//		console.log(data)
//	},function(data){
//		
//	})
	//修改
//	$scope.qrgx=function(){
//		$http({
//			url:'',
//			method:'post',
//			data:{
//				name=$scope.nicheng;
//				address=$scope.address;
//				qq=$scope.qq;
//				email=$scope.email;
//				tel=$scope.tel;
//			}
//		}).then(function(data){
//			console.log(data)
//		},function(data){
//			
//		})
//	}
}])
