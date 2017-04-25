var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var pool = mysql.createPool({
	host: '192.168.43.102', //本机端口
	user: 'root',
	password: 'sun00.', //mysql 安装时的密码
	database: 'niu', //数据库名称
	port: 3306 //mysql 端口
})

router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
router.get('/list', function(request, response) { //请求参数    ，  响应参数

	console.log('我是一个兵')
	if(request.session.phone!=''&&request.session.phone!=null){
		getALLUsers(function(err, results) {
			if(err) {
				response.send(err)
			} else if(results) {
				console.log('>>>' + results)
				response.send(results)
			}
		})
	}else{
		response.send({flag:1})
	}

})
//获取后台列表信息
function getALLUsers(callback) {
	pool.getConnection(function(err, conn) {
		var getALLUsers_Sql = 'select * from news';//查询user表中的所有数据
		conn.query(getALLUsers_Sql, function(err, result) {
			
			if(err) {
				console.log("getALLUsers Error:" + err.message);
				return
			}
			conn.release(); //释放链接
			callback(err, result)
		})
	})
}




router.post('/fabu', function(request, response) { //请求参数    ，  响应参数
	var type = request.body.type;
	var headline = request.body.headline;
	var content = request.body.content;
	var times = request.body.times;
			save(type,headline,content,times,function(err,results){
				if(results){
					response.send({flag:1,results:results}) //注册成功
				}
			})
})
//保存数据
function save(type,headline,content,times,callback){
	pool.getConnection(function(err,connection){
		var getALLUsers_Sql = 'insert into news (type,headline,content,times) values (?,?,?,?)'  //查询
		connection.query(getALLUsers_Sql,[type,headline,content,times], function(err,result) {
			console.log('result:' + result)
			if(err){
				console.log("getALLUsers Error:" +err.message);
				return
			}
			connection.release(); //释放链接
			callback(err,result)
		})
	}) 
}

////清除session
//router.get('/clear', function(request, response) { //请求参数    ，  响应参数
//	console.into('退出')
//	request.session.destroy()
//})
module.exports = router;