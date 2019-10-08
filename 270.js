var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log("Server is listening to 3000");
})

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
})

// ==========================================
// app.get("/speak/pig", function(req, res){
//   res.send("The pig says 'Oink'")
// })

// app.get("/speak/cow", function(req, res){
//   res.send("The cow says 'Moo'")
// })

// app.get("/speak/dog", function(req, res){
//   res.send("The dog says 'Woof'")
// })

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;

  if(animal === "pig"){
    res.send("The " + animal + " says 'Oink'")
  }

  if(animal === "cow"){
    res.send("The " + animal + " says 'Moo'")
  }

  if(animal === "dog"){
    res.send("The " + animal + " says 'Woof'")
  }
})

// ==========================================
// app.get("/repeat/hello/3", function(req, res){
//   res.send("hello hello hello")
// })

// app.get("/repeat/hello/5", function(req, res){
//   res.send("hello hello hello hello hello")
// })

// app.get("/repeat/blah/2", function(req, res){
//   res.send("blah blah")
// })

app.get("/repeat/:word/:quantity", function(req, res){
  var word = req.params.word;
  var quantity = Number(req.params.quantity);
  var output = "";
  // res.send(word + quantity);

  for (var i = 0; i < quantity; i++){
    output += word + " ";
  }
  res.send(output);
})

// ==========================================
app.get("*", function(req, res){
  res.send("Sorry, page not found... What are you doing with your life?")
})

