angular.module('myApp')
.controller('xprofile',['$scope','$http',function($scope,$http){
	$scope.a=true;
	$scope.b=false;
	$scope.gengxin=true;
	$scope.qrgengxin=false;
	$scope.all=true;
	$scope.name=0;
	$scope.zhe=false
	$scope.dian=true
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
	$scope.zhezao=function(){
		$scope.zhe=false
		$('.sub').attr('disabled','true')
	}
	//获取资料
	$http({
		url:'http://localhost:3333/update/shuju',
		method:'get',
		params:{
			id:localStorage.id
		}
	}).then(function(data){
		$scope.nicheng=data.data[0].name
		$scope.qq=data.data[0].qq
		$scope.email=data.data[0].email
		$scope.tel=data.data[0].phone
		$scope.address=data.data[0].site
	},function(data){
		alert('err')
	})
	//修改
	$scope.qrgx=function(){
		$http({
			url:'http://localhost:3333/update/update',
			method:'post',
			data:"nicheng="+$scope.nicheng +"&email="+$scope.email +"&address=" +$scope.address +"&qq=" +$scope.qq+"&tel=" +$scope.tel+"&id=" +localStorage.id,
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}

		}).then(function(data){
			$scope.gengxin=true;
			$scope.qrgengxin=false;
			$scope.all=true;
		},function(data){
			alert('error')
		})
	}
	//图片上传
	var files;
	var oInput=document.getElementById('img_input')
	oInput.onchange=function(){
		files=oInput.files[0]
		$('.sub').removeAttr('disabled')

		$scope.src=files.name
	}
	$scope.uPload=function(){
		var formdata = new FormData();
		formdata.append("uploadedFile", files); 
		$http({
			url:'http://localhost:3333/update/upload',
			method:'post',
			data:formdata,
			headers:{'Content-Type': undefined}

		}).then(function(data){
			$scope.img=data.data
			$http({
				url:'http://localhost:3333/update/add',
				method:'post',
				data:"imgSrc="+$scope.img+"&id=" +localStorage.id,
				headers:{'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function(data){
				if(data.data.flag==1){
					$scope.zhe=true
					oInput.value=''

				}
			},function(data){
				alert('error')
			})
		},function(data){
			alert('error')
		})
	}
}])
