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

router.get('/jsjs', function(request, response) { //请求参数    ，  响应参数
	console.log('我是一个兵')
	getALLUser(function(err, results) {
		if(err) {
			response.send(err)
		} else if(results) {
			console.log('>>>' + results)
			response.send(results)
		}
	})
})
//获取后台列表信息
function getALLUser(callback) {
	pool.getConnection(function(err, conn) {
		var getALLUsers_Sql = "select * from news where type = 'javascript'";//查询user表中的所有数据
		conn.query(getALLUsers_Sql, function(err, result) {
			console.log('result:' + result)
			if(err) {
				console.log("getALLUsers Error:" + err.message);
				return
			}
			conn.release(); //释放链接
			callback(err, result)
		})
	})
}

module.exports = router;