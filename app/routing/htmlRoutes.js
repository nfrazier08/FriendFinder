// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


//Routes Needed:
    //When user "visits" a page, specifically the survey page
    //In each case, the user is shown an html page of the content

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile("home.html", {root: "./app/public"})           
    })

    app.get("/home.css", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/home.css"))
    })

    app.get("/survey.css", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/survey.css"))
    })

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    app.get("/friendList", function(req,res){
        res.sendFile(path.join(__dirname, "../data/friendList.json"))
    })

    app.get("/clickFunctions", function(req, res){
        res.sendFile(path.join(__dirname, "../data/clickFunctions.js"))
    })

    //A default, that throws the user to the home page
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, ".../public/home.html"));
    })
}