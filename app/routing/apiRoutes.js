//Routes Needed:
    //GET routes with the url `api/friends` to display JSON of all possible friends
    //POST routes `/api/friends` to handle incoming survey results and compatibility logic

    module.exports = function(app){
        //I want to get the newFriend object from the survey and write it to the friendList.json
        app.get("api/readFriends", function(req, res){
            res.sendFile(path.join(_dirname, "../data/friendList"))
        })

        //api means that I am handling logic and not sending something to the client
       app.post("/api/postFriend", function(req, res){
            //req.body is our new posted friend from ajax request in click function
            var newFreindToPost = req.body

            //This is working, but not printing the exact response I need to use
                //Troubleshoot this later
            console.log(newFreindToPost)
            //take req.body and do compare logic
            //then store req.body

            //This will send a response

       })
          

        //API POSTS
        //below code handles when a user submits a form and thus submits data to the server
        //When a user submits data (a JSON object)
            //JSON is pushed to the correct javascript array
            //User fills out survey, data is sent to the server, server saves data to the serverData array
        // app.post("/api/friends")
   
        }