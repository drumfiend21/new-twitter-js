var express = require("express");
var app = express();





app.get('/', function(req,res){
	res.send("up and running");
})



app.listen(3000);