var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');


var index = require('./routes/index');
var users = require('./routes/users');

var home = require('./routes/home');
var jsjs = require('./routes/javascript');
var a1 = require('./routes/a1');
var profile = require('./routes/profile');
var xprofile = require('./routes/xprofile');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(session({
		secret:'12345',
		name:'testapp', //destroy 退出的方法
		resave:false,
		saveUninitialized:true    //不初始化
}))
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/list', home);
app.use('/jsjs', jsjs);
app.use('/a1',a1)
app.use('/my', profile);
app.use('/update', xprofile);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen('3333', function() {
	console.log('server start')
})
module.exports = app;
