var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");

// App config
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose/model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "Test Blog",
//   body: "HELLO THIS IS A BLOG"
// });

// RESTful Routes

app.get("/", function(req, res){
  res.redirect("/blogs");
})

app.get("/blogs", function(req, res){
  Blog.find({}, function(err, blogs){
    if(err) {
      console.log("Error");
    } else {
      res.render("index", {blogs: blogs});
    }
  })
  res.render("index");
});

app.listen(3000, function(){
  console.log("Server is running");
})