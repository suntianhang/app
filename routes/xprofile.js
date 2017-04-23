var express = require('express');

var mysql = require('mysql')
var router = express.Router();

// 链接数据库
//var pool = mysql.createPool({
//	host:'192.168.43.102',
//	user:'root',	//mysql安装时的用户名
//	password:'sun00.', //mysql安装时的密码
//	database:'niu', //数据库名称
//	port:3306  //数据库端口
//})
////获取个人信息
//function getAllUsers(callback){
//	pool.getConnection(function(err,connection){
//		var sql='select * from list';
//		connection.query(sql,function(err,result){
//			console.log("result:"+result);
//			if(err){
//				console.log('getAllUsers Error:'+err.message);
//				return;
//			}
//			connection.release();//释放链接
//			callback(err,result);
//		})
//	})
//}
//
//router.get('/shuju',function(request,response){
//	console.log('into list...')
//	getAllUsers(function(err,results){
//		if(err){
//			response.send(err);
//		}else if(results){
//			console.log('>>>'+results);
//			response.send(results);
//		}
//	})
//})
//
// //跨域
// router.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
//
//
////修改
//function update(name,age,ad,sex,tel,id,callback){
//	pool.getConnection(function(err,connection){
//		var sql='update list set name=?,age=?,address=?,sex=?,tel=? where id=?'
//		connection.query(sql,[name,age,ad,sex,tel,id],function(err,result){
//			if(err){
//				console.log('inserUser_Sql Error:'+err.message);
//				return;
//			}
//			connection.release();
//			console.log('invoked[update]')
//			callback(err,result);
//		})
//	})
//}
////
//router.post('/update',function(request,response){
//	var id=request.body.id;
//	var name=request.body.name;
//	var address=request.body.address;
//	var age=request.body.age;
//	var sex=request.body.sex;
//	var tel=request.body.tel;
//	update(name,age,address,sex,tel,id,function(err,result){
//		if(err){
//			err={flag:3};
//			response.send(err);
//			return
//		}
//		if(result.changedRows>0){
//			result={flag:1};
//			response.send(result);
//		}else{
//			err={flag:2}
//		}
//	})
//})


module.exports=router;