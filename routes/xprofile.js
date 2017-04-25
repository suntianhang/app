var express = require('express');

var mysql = require('mysql')
var fs = require('fs')
var formidable = require('formidable')
var router = express.Router();

// 链接数据库
var pool = mysql.createPool({
	host:'192.168.43.102',
	user:'root',	//mysql安装时的用户名
	password:'sun00.', //mysql安装时的密码
	database:'niu', //数据库名称
	port:3306  //数据库端口
})
//获取个人信息
function getUsers(id,callback){
	pool.getConnection(function(err,connection){
		var sql='select * from user where id = ?';
		connection.query(sql,[id],function(err,result){
			console.log("result:"+result);
			if(err){
				console.log('getAllUsers Error:'+err.message);
				return;
			}
			connection.release();//释放链接
			callback(err,result);
		})
	})
}

router.get('/shuju',function(request,response){
	console.log('into list...')
	var id=request.query.id;
	getUsers(id,function(err,results){
		console.log('into list2...')
		if(err){
			response.send(err);
		}else if(results){
			console.log('你妈炸了草拟吗'+results);
			response.send(results);
		}
	})
})
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
//修改
function update(name,email,ad,qq,tel,id,callback){
	pool.getConnection(function(err,connection){
		var sql='update user set name=?,email=?,site=?,qq=?,phone=? where id=?'
		connection.query(sql,[name,email,ad,qq,tel,id],function(err,result){
			if(err){
				console.log('inserUser_Sql Error:'+err.message);
				return;
			}
			connection.release();
			console.log('invoked[update]')
			callback(err,result);
		})
	})
}
////修改
router.post('/update',function(request,response){
	var id=request.body.id;
	var name=request.body.nicheng;
	var address=request.body.address;
	var email=request.body.email;
	var qq=request.body.qq;
	var tel=request.body.tel;
	update(name,email,address,qq,tel,id,function(err,result){
		if(err){
			err={flag:3};
			response.send(err);
			return
		}
		if(result.changedRows>0){
			result={flag:1};
			response.send(result);
		}else{
			err={flag:2}
		}
	})
})

//图片
// 获取图片并用字符串给图片重新命名保证名字唯一性
router.post("/upload",function(request,response){

	var form = new formidable.IncomingForm();
	//创建incomingForm对象
	form.uploadDir="public/images/upload/";
	//设置上传文件存放的文件夹。可以使用fs.rename()来改变上传文件的存放位置和文件名

	//如果form.uploadDir不赋值,他默认的位置是C:\User\用户名\AppData\Local\Temp
	form.parse(request,function(error,fields,files){
		for(var i in files){
			var file=files[i];
			var fName=(new Date()).getTime()//+process.hrtime()[1].toString
			switch(file.type){
				case "image/jpeg":
					fName=fName+'.jpg';
					break;
				case "image/png":
					fName =fName+'.png';
					break;
			}
		}
		var newPath="public/images/download/"+fName
		fs.renameSync(file.path,newPath);//重命名
		response.send(fName)
	})
})
//往数据库存入图片名字用字符串形式
function save(img,id,callback){
	pool.getConnection(function(err,conn){ //获取连接
		var sql ='update user set src=? where id = ?';
		conn.query(sql,[img,id],function(err,result){
//			console.log(img)
//			console.log(result)
			if(err){
				console.log(1111)
				return
			}
			conn.release()  //释放连接
			callback(err,result)
		})
	})
}
router.post('/add',function(request,response){
	var img=request.body.imgSrc;
	var id=request.body.id;
	console.log(img);
	save(img,id,function(err,result){
//		console.log('resultlllllll'+result);
		response.send({flag:1})//注册成功
	})
})

module.exports=router;