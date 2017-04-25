var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'sun00.',
	database:'niu',
	port:3306
})

/* GET users listing. */
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//  登陆    
router.post('/login', function(req, res) {
	var phone = req.body.phone;
	var password = req.body.password;
	pool.getConnection(function(err,success){
		var get_sql = 'select * from user where phone = ? ';
		success.query(get_sql,[phone],function(error,result){
			if(result.length == 0){
				res.send({
					flag:1
				})
			}else{
				if(password = result[0].password){
					res.send(result)
				}else{
					res.send({
						flag:3
					})
				}
			}
			
			success.release();
		})
	})
});

//登陆结束

//注册

// 查询是否有这个手机号

function fill(phone,callbk){
	pool.getConnection(function(error,success){  
		var ger_sql = 'select * from user where phone = ?';  //查询
		success.query(ger_sql,[phone],function(err,result){
			
			success.release();
			callbk(err,result);
		})
	})
}
//将注册内容写入数据库

function flu(username,password,phone){
	pool.getConnection(function(err,success){
		var Get = 'insert into user (username,password,phone) values (?,?,?)';
		success.query(Get,[username,password,phone],function(error,result){
			console.log('result:'+result)
			success.release();
			
		})
	})
}

//提交注册内容

router.post('/register',function(req,res){
	var username = req.body.username;
	var phone = req.body.phone;
	var password = req.body.password;
	console.log(username,phone,password)
	fill(phone,function(err,result){
		if(result == ''){
			res.send({
				msg:1
			})
			flu(username,password,phone)
		}else{
			res.send({
				msg:2
			})
		}
	})
})

//注册结束

// 个人详情信息

router.get('/details',function(req,res){
	id = req.query.id;
	pool.getConnection(function(err,success){
		var get_del = 'select * from user where id = ? ';
		success.query(get_del,[id],function(error,result){
			res.send(result)
		})
	})
})

//个人详情信息结束


//问题详情
router.post('/question',function(req,res){
	console.log('246134651641')
	pool.getConnection(function(err,success){
		var get_del = 'select * from news';
		success.query(get_del,function(error,result){
			res.send(result)
		})
	})
})
//
module.exports = router;
