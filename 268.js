var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log("Server is listening to 3000");
})

//-----------------------------------------

app.get('/', function(req, res){
  res.send("This is the HOMEPAGE");
})

app.get('/dogs', function(req, res){
  res.send("My favourite dog is pomeranian");
})

app.get('*', function(req, res){
  res.send("Error 404. Nothing found");
})