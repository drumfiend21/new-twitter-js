var express = require("express");
var router = express.Router();

var officeNames = ["Dr. Joshi's Office","NP's Office","Cynthia's Office", "Joe's Office"]

router.get("/office/:number", function(req,res,next){
	var officeNumber = req.params.number;
	res.send("The name for office "+officeNumber+" is "+officeNames[officeNumber-1]);
})

module.exports = router;