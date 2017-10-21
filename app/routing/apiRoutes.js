//Linking routes to a series of "data" sources
    //These data sources hold an array of new friend information
    // var friendList = require("../data/friendList");


//Routes Needed:
    //GET routes with the url `api/friends` to display JSON of all possible friends
    //POST routes `/api/friends` to handle incoming survey results and compatibility logic

    module.exports = function(app){
        //I want to read the friendList.json file (where the friends are printed) with the api/readFriendList pathway
        app.get("api/readFriendList", function(req, res){
            res.sendFile("friendList.json", {root: "../data"})
        })

        //api means that I am handling logic and not sending something to the client
        //I want to read the AJAX request and print the friend to the friendList.json file
        app.post("/api/postFriend", function(req, res){
            //req.body is our new posted friend from ajax request in click function
            var newFreindToPost = req.body
            console.log(newFreindToPost)

            //STEP ONE: WRITE newFriendToPost to friends.js file
            friendList.push(newFreindToPost);

            
       })
          

   
}