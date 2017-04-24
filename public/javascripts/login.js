
	app.controller("login",function($scope,$http,$state,$location){
		var c = document.getElementById("canvas-clubs");//获取画布元素
		var ctx = c.getContext("2d");////创建画布元素的绘画方法
		var w = c.width = window.innerWidth; //创建一个变量w，并将画布的宽度设置为全屏
		var h = c.height = window.innerHeight; //创建一个变量h，并将画布的高度设置为全屏
		var clearColor = 'rgba(0,0,0,.1)';//清除画布的颜色
		var max = 40;
		var drops = [];
		
		function random(min, max) {//获取最小值到最大值之间的随机数
			return Math.random() * (max - min) + min;
		}
		
		function O() {//雨点的构造函数				
		}

		O.prototype = {//雨点的原型方法
			init: function() {//雨点的初始化接口
				this.x = random(0, w);//设置雨点的初始化x坐标
				this.y = 0;//设置雨点的初始化y坐标
				this.color = 'hsl(180, 100%, 50%)'; //设置雨点的颜色
				this.w = 2; // 雨点落地后的圆宽度
				this.h = 1;//雨点落地后的圆高度
				this.vy = random(4, 5); //雨点的坠落速度，每次增加的距离 4 -5 
				this.vw = 3;//圆圈的横向半径增加量
				this.vh = 1;//圆圈的纵向半径增加量
				this.size = 2;//雨点的大小
				this.hit = random(h * .8, h * .9);//屏幕的高度的0.8-0.9之间的值
				this.a = 1;//开关，用于检测圆圈是否变化完成
				this.va = .96;//圆圈变化的大小
			},
			draw: function() {
				
				if(this.y > this.hit) {//雨点已经到达地面开始变成圆
					ctx.beginPath();
					ctx.moveTo(this.x, this.y - this.h / 2);

					ctx.bezierCurveTo(
						this.x + this.w / 2, this.y - this.h / 2,
						this.x + this.w / 2, this.y + this.h / 2,
						this.x, this.y + this.h / 2);

					ctx.bezierCurveTo(
						this.x - this.w / 2, this.y + this.h / 2,
						this.x - this.w / 2, this.y - this.h / 2,
						this.x, this.y - this.h / 2);

					ctx.strokeStyle = 'hsla(180, 100%, 50%, ' + this.a + ')';
					ctx.stroke();
					ctx.closePath();
				} else {
					ctx.fillStyle = this.color;
					ctx.fillRect(this.x, this.y, this.size, this.size * 5);
				}
				this.update();
			},
			update: function() {
				if(this.y < this.hit) {//判断雨点的Y值是否到达了屏幕的底部
					this.y += this.vy;
				} else {
					if(this.a > .03) {//判断雨点落地后的圆是否已经完成，如果完成则进行初始化
						this.w += this.vw;//10
						this.h += this.vh;//2
						if(this.w > 100) {//如果圆的横向半径大于100，调整this.a的时间间隔
							this.a *= this.va;//时间间隔，0.96 
							this.vw *= .98;//如果大于100，圆的宽度变化开始变慢
							this.vh *= .98;//如果大于100，圆的高度变化开始变慢
						}
					} else {//雨点初始化
						this.init();
					}
				}
			}
		}

		function setup() {//循环遍历最大创建多少个雨点，在循环中创建最大数量的雨点对象，并存放在数组里
			for(var i = 0; i < max; i++) {
				(function(j) {
					setTimeout(function() {
						var o = new O();
						o.init();
						drops.push(o);
					}, j * 200)
				}(i));
			}
		}

		function anim() {
			ctx.fillStyle = clearColor; //清空画布
			ctx.fillRect(0, 0, w, h);//重新设置画布的大小
			for(var i in drops) {//遍历雨点的数组，为每个雨点对象执行落下方法
				drops[i].draw();
			}
			
			requestAnimationFrame(anim);//与setintval类似，专门用于动画的全局方法
		}

		window.addEventListener("resize", function() {
			w = c.width = window.innerWidth;
			h = c.height = window.innerHeight;
		}, false);
		setup();
		anim();
		$(document).ready(function(){
	
	function createCode() {
			code = '';
			var codeLength = 4;
			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
			for(var i = 0; i < codeLength; i++) {
				var index = Math.floor(Math.random() * 36);
				code += random[index];
			}
//			console.log($('.yu_codeImg').text())
			
			$('.yu_codeImg').text(code)
				$scope.uname="";
				$scope.tel="";
				$scope.pwd="";
				$scope.tishi=false;
				$scope.phone=false;
				$scope.psd=false;
				$scope.tishi2=false;
				$scope.phone2=false;
				$scope.psd2=false;
				function dianji(){
					$scope.none=function(){
						$scope.tishi=false;
						$scope.tishi2=false;
					}
				}
				$scope.login=function(){
					if($scope.tel==""){
						$scope.tishi=true;
						$scope.phone=true;
						dianji();
					}else if($scope.pwd==""){
						$scope.tishi=true;
						$scope.psd=true;
						dianji();
					}else{
						if(code==$scope.yzm){
						$http({
							url:"http://192.168.43.102:3333/a1/login",
							method:"post",	
//							data:{
//								phone:MD5(MD5($scope.tel)),
//								password:MD5(MD5($scope.pwd))
//							},
							data:"&password="+$scope.pwd +"&phone=" +$scope.tel,
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
								}
							}).then(function(e){
								//console.log(e.data[0].id);
								if(e.data.flag==1){ //手机号码错误
									$scope.tishi2=true;
									$scope.phone2=true;
									dianji();
								}else if(e.data.flag==3){//密码错误
									$scope.tishi2=true;
									$scope.psd2=true;
									dianji();
								}else{//登陆成功
									localStorage.id=e.data[0].id
									sessionStorage.yonghu=1;
									$location.url('/home')
								}
							},function(){
								alert('err')
							})
						}else{
							alert('请输入正确的验证码')
						}
					}
					
					
				}
		}
		
	$("#yu_codeTxt").click(function(){
//		console.log(1)
		createCode()
	})
	
	
	
	createCode();
})
	
	})

