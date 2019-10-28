var express               = require("express");
var app                   = express();
var mongoose              = require("mongoose");
var passport              = require("passport");
var bodyParser            = require("body-parser");
var useNewUrlParser       = require("./models/user");
var LocalStrategy         = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");


mongoose.connect("mongodb://localhost:27017/authentication_demo_app", {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.use(require("express-session")({
  secret: "Rusty is the best and cutest dog in the world",
  resave: false,
  saveUninitialized: false
}));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ==========================================
//                  ROUTES
// ==========================================

app.get("/", function(req, res){
  res.render("home");
})

app.get("/secret", function(req, res){
  res.render("secret");
})


// Authentication Routes

// Show sign up form
app.get("/register", function(req, res){
  res.render("register")
})

// Handling user sign up
app.post("/register", function(req, res){
  res.send("REGISTER POST ROUTE");
})


app.listen(3000, function(){
  console.log("Server started..........!");
})