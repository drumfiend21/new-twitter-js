var express = require("express");
var app = express();
var morgan = require("morgan");
var chalk = require("chalk")


var obj = {

	'msg':"this is the value, 'msg' was the key"
}


app.use(morgan(function (tokens, req, res) {
  return chalk.blue(tokens.method(req, res))
    + ' ' + chalk.green(tokens.url(req, res))
    + ' ' + chalk.red(tokens['response-time'](req, res))
}))

app.get('/', function(req,res){
	res.send("up and running");
})

app.get('/news', function(req,res){
	res.send(obj.msg);
})




app.listen(3000);