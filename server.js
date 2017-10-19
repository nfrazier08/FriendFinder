// Set of packages needed
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Tells node that we are creating an "express" server
var app = express();

//Sets up initial port
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Router
//Points server to a series of "route" files
//Give server a "map" of how to respond when users visit or request data from various URLs
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//STEP 1: I want to record the users answers to a survey and push them into an object
    //THIS IS HANDLED IN THE CLICK EVENT ON THE SURVEY.HTML CLICK EVENT





//Listener
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT)
})