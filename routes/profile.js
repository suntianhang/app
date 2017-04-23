var express = require('express');

var mysql = require('mysql')
var router = express.Router();

//// 链接数据库
//var pool = mysql.createPool({
//	host:'127.0.0.1',
//	user:'root',	//mysql安装时的用户名
//	password:'matengfei', //mysql安装时的密码
//	database:'shuju', //数据库名称
//	port:3306  //数据库端口
//})
////获取信息列表
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
////获取详细数
//function getUsersId(id,callback){
//	pool.getConnection(function(err,connection){
//		var sql='select * from list where id = ?';
//		connection.query(sql,[id],function(err,result){
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
//router.get('/xiugai',function(request,response){
//	var id=request.query.id;
//	getUsersId(id,function(err,results){
//		if(err){
//			response.send(err);
//		}else if(results){
//			console.log('>>>'+results);
//			response.send(results);
//		}
//	})
//})
//// //跨域
//// router.all('*', function(req, res, next) {
////     res.header("Access-Control-Allow-Origin", "*");
////     res.header("Access-Control-Allow-Headers", "X-Requested-With");
////     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
////     res.header("X-Powered-By",' 3.2.1')
////     res.header("Content-Type", "application/json;charset=utf-8");
////     next();
//// });
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
//
////删除
//function del(id,callback){
//	pool.getConnection(function(err,connection){
//		var sql="delete from list where id=?"
//		connection.query(sql,[id],function(err,result){
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
//router.get('/del',function(request,response){
//	var id=request.query.id;
//	del(id,function(err,result){
//		if(err){
//			err={flag:3};
//			response.send(err);
//			return
//		}
//		// if(result.changedRows>0){
//		// 	result={flag:1};
//		// 	response.send(result);
//		// }else{
//		// 	err={flag:2}
//		// }
//		response.send(result);
//	})
//})
//// 搜索
//function search(keyword,callback){
//	pool.getConnection(function(err,connection){
//		var sql="select * from list where name like ? or age like ? or address like ? or sex like ? or tel like ?"
//		connection.query(sql,['%'+keyword+'%','%'+keyword+'%','%'+keyword+'%','%'+keyword+'%','%'+keyword+'%'],function(err,result){
//			if(err){
//				console.log('inserUser_Sql Error:'+err.message);
//				return;
//			}
//			connection.release();
//			console.log('invoked[search]')
//			callback(err,result);
//		})
//	})
//}
////
//router.get('/search',function(request,response){
//	console.log('into ..... search........');
//	var key=request.query.key;
//	search(key,function(err,result){
//		if(err){
//			err={flag:3};
//			response.send(err);
//			return
//		}else if(result){
//			response.send(result);
//		}	
//	})
//})
//
//// //获取total
//// function getPages(callback){
//// 	var total=0
//// 	pool.getConnection(function(err,connection){
//// 		var sql='select * from list';
//// 		connection.query(sql,function(err,result){
//// 			console.log("result:"+result);
//// 			if(err){
//// 				console.log('getAllUsers Error:'+err.message);
//// 				return;
//// 			}
//// 			connection.release();//释放链接
//// 			total=result.length;
//// 			callback(err,result);
//// 		})
//// 	})
//// }
//// //分页
//// router.get('page',function(request,response){
//// 	var pageNum = request.query.pageNum
//// 	console.log('pageNum:'+pageNum);
//// 	var total=0
//// 	getPages(function(err,results){
//// 		if(err){
//// 			console.log('getAllUsers Error:'+err.message);
//// 			return;
//// 		}else if(results){
//// 			total=results;
//// 			getResults(pageNum,function(err,results,pageSize){
//// 				var totalPage=Math.ceil(total/pageSize)
//// 				var data={total:total,pageSize:pageSize,totalPage:totalPage,list:results}
//// 				reponse.send(data)
//// 			})
//// 		}
//// 	})
//// })
//// function getResults(pageNum,callback){
//// 	console.log('into getResults...')
//// 	var pageSize=3;
//// 	var startPage=pageNum*pageSize
//// 	poor.getConnection(function(err,connection){
//// 		var sql='select*from interview limit ?,?'
//// 		connection.query(sql,[startPage,pageSize],function(err,result){
//// 			if(err){
//// 				console.log('total_Error:'+err.message)
//// 				return;
//// 			}
//// 			connection.release()
//// 			callback(err,total)
//// 		})
//// 	})
//// }
//
//
//router.get('/page',function(request,response){ //请求参数    ，  响应参数
//	var pageNum=request.query.pageNum
//	var total=0
//	getPages(function(err,results){
//		console.log(1)
//		if(err){
//			response.send(err)
//			return
//		}else if(results){
//			console.log(3)
//			total = results.length
//			getResuLts(pageNum,function(err,results,pageSize){
//				console.log(4)
//				var totalPage = Math.ceil(total/pageSize)
//				var data = {total:total,pageSize:pageSize,totalPage:totalPage,list:results}
//				response.send(data)
//			})
//		}
//	})
//})
//function getResuLts(pageNum,callback){
//	var pageSize=3;
//	var totalPage=pageNum*pageSize
//	pool.getConnection(function(err,connection) {
//		var getALLUsers_Sql='select * from list limit ?,?'; //查询
//		connection.query(getALLUsers_Sql,[totalPage,pageSize],function(err,result){
//			if(err){
//				console.log("getALLUsers Error22:" + err.message);
//				return
//			}
//			connection.release(); //释放链接
//			callback(err,result,pageSize)
//		})
//	})
//}
//function getPages(callback) {
//	var total = 0
//	pool.getConnection(function(err, connection) {
//		var getALLUsers_Sql = 'select * from list'; //查询
//		connection.query(getALLUsers_Sql,function(err, result) {
//			if(err) {
//				console.log("getALLUsers Error333:" + err.message);
//				return
//			}
//			connection.release(); //释放链接
//			total = result.length
//			callback(err, result)
//		})
//	})
//}

module.exports=router;