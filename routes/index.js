module.exports = function(io){
	var express = require('express');
	var router = express.Router();
	var bodyParser = require('body-parser')
	// could use one line instead: var router = require('express').Router();

	var tweetBank = require('../tweetBank');
	var saugus = require("./saugus");

	router.use(bodyParser.urlencoded({ extended: false}))
	router.use(bodyParser.json())
	router.use('/saugus', saugus)

	router.get('/', function (req, res) {
	  var tweets = tweetBank.list();
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
	});

	router.post('/submit', function (req, res) {
	  var tweeted = req.body;
	  tweetBank.add(tweeted.name, tweeted.text);
	  var tweet = tweetBank.find({text : tweeted.text});
	  console.log(tweet)
	  io.sockets.emit('new_tweet', tweet);
	  res.redirect("/")
	});

	router.get('/users/:name',function(req,res){
		var name = req.params.name;
		var tweets = tweetBank.find({name: name});
		res.render('index', {title: 'Twitter.js - Posts by '+name , tweets: tweets, showForm: true, name: name})
	})

	router.get('/users/:name/tweets/:id', function(req,res){
		var userName = req.params.name.replace("%20"," ").replace("\\","");
		console.log(userName)
		var tweetId = req.params.id;
		console.log(tweetId)
		var tweet = tweetBank.find({id: parseInt(tweetId)});
		console.log(tweet)
		res.render('index',{title: 'Twitter.js - Post by'+userName, tweets: tweet, oneTweet: true})
	})

	return router;
};
