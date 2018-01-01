var entries = {
	"data":
	[{
		"name":"",
		"url":"",
		"locations": [
			{"country":"IN","loc":""},
			{"country":"US","loc":""},
			{"country":"IN","loc":""}
		]
	},
	{
		"name":"",
		"url":"",
		"locations": [
			{"country":"IN","loc":""},
			{"country":"IN","loc":""},
			{"country":"IN","loc":""}
		]
	},
	{
		"name":"",
		"url":"",
		"locations": [
			{"country":"IN","loc":""},
			{"country":"IN","loc":""},
			{"country":"IN","loc":""}
		]
	}]
};

var express = require('express');

var app = express();

app.get('/', function(req,res){
	req.accepts('application/json');
	
	res.set('Access-Control-Allow-Origin',"*");
	
	res.send(entries);
});

app.listen(8080, function() {
	console.log("Running on port ",8080);
});

console.log(entries.data.length);