var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();

var tweetBank = require('../tweetBank');
var saugus = require("./saugus");

router.use('/saugus', saugus)

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;

module.exports = router;