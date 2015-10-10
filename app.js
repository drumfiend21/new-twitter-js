var express = require("express");
var app = express();
var morgan = require("morgan");
var chalk = require("chalk")
var swig = require('swig');

//set up templating
app.engine('html', swig.renderFile);
app.set('views', __dirname+'/views')
app.set('view engine', 'html')

//disable view cacheing for development
swig.setDefaults({ cache: false });

var obj = {

	'msg':"this is the value, 'msg' is the key",
	'success':"this life is going to be a success.  You will excel and God is with you.  No one wants you to fail.  You will succeed.  Just keep working hard.  You are loved and supported from above in your goals."
}

var data = {
	title : 'I am Siddharth Joshi',
	people : [
		{
			name : 'Evolved'
		},
		{
			name : 'Wise'
		},
		{
			name : 'Mowgli'
		},
		{
			name : 'Inspiring'
		},
		{
			name : 'Powerful'
		}
	]

}


app.use(morgan(function (tokens, req, res) {
  return chalk.blue(tokens.method(req, res))
    + ' ' + chalk.green(tokens.url(req, res))
    + ' ' + chalk.red(tokens['response-time'](req, res))
}))

app.get('/', function(req,res){
	res.render('index', data)
})

app.get('/news', function(req,res){
	res.send(obj.msg);
})

app.get('/success', function(req,res){
	res.send("<h1>"+obj.success+"</h1>");
})




app.listen(3000);