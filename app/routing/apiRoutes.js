//Routes Needed:
    //GET routes with the url `api/friends` to display JSON of all possible friends
    //POST routes `/api/friends` to handle incoming survey results and compatibility logic

    var surveyData = require("../data/friends");

    module.exports = function(app){
        //This should be "getting" the survey data and handle the compatibility data
        app.get("/api/friends", function(req, res){
            res.json(surveyData);
        });

        //API POSTS
        //below code handles when a user submits a form and thus submits data to the server
        //When a user submits data (a JSON object)
            //JSON is pushed to the correct javascript array
            //User fills out survey, data is sent to the server, server saves data to the serverData array
        // app.post("/api/friends")
   
        }