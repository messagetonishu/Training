var express = require('express');

var app = express()

app.get('/', function (req, res) {
  res.send({name:"Jagadeesh"})
})

app.get('/welcome', function (req, res) {
  res.send("Welcome to nodeJS");
})

app.get('/about', function(req, res){
	res.send("this is Project Base Traing");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})