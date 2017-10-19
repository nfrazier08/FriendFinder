// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

//Routes Needed:
    //GET to survey
    //A default, catch-all route that leads to home.html 
    //When user "visits" a page
    //In each case, the user is shown an html page of the content

module.exports = function(app){
    //When a user visits the survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    //A default, that throws the user to the home page
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, ".../public/home.html"));
    })
}