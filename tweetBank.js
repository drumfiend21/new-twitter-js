var _ = require("underscore");

var data = [];

var add = function(name, text, id){
	
	data.push({ name: name, text: text, id: getId()});
}

var list = function(){
	return _.clone(data)
}

var find = function(properties){
	return _.where(data, properties);
}

module.exports = {add: add, list: list, find: find};

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

var count = 0;

var getId = function(){
	
	count++;
	return count;	
}

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet());
}

module.exports.add("Michael O'brien", "yo dude!", getId())
module.exports.add("Michael O'brien", "nice work!  nice wheels!", getId())

console.log(data)