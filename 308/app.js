var express          = require("express");
var app              = express();
var bodyParser       = require("body-parser");
var mongoose         = require("mongoose");
var methodOverride   = require("method-override");
var expressSanitizer = require("express-sanitizer");

// App config
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// Mongoose/model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "Cute pome",
//   image: "https://thehappypuppysite.com/wp-content/uploads/2018/07/white-pomeranian-long-1024x555.jpg",
//   body: "Pomeranians are the best"
// });

// ==================================ROUTES===================================

// RESTful ROUTE

app.get("/", function(req, res){
  res.redirect("/blogs");
})

// INDEX ROUTE
app.get("/blogs", function(req, res){
  Blog.find({}, function(err, blogs){
    if(err) {
      console.log("Error");
    } else {
      res.render("index", {blogs: blogs});
    }
  })
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
	res.render('new');
})

// CREATE ROUTE
app.post("/blogs", function(req, res){
	
	// Create blog
	req.body.blog.body = req.sanitize(req.body.blog.body)
	
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		} else {
			// Then redirect to index
			res.redirect("/blogs");
		}
	})
})

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err) {
			res.send("Error has occured");
		} else {
			res.render("show", {blog: foundBlog});
		}
	})
})

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
			if(err) {
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundBlog});
		}
	})
})

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body)
	
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err) {
			res.redirect("/blogs")
		} else {
			res.redirect("/blogs/" + req.params.id);
		}
	})
})

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
	// Destroy blog
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err) {
			res.redirect("/blogs")
		} else {
			res.redirect("/blogs/" + req.params.id);
		}
	})
	// Redirect 
})

app.listen(3001, function(){
  console.log("Server is running");
})