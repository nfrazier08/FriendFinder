//This file handles writing the json file and and pushing the newFriendToPost Object
    //to the friendList.json file

//Require in file system
    var fs = require("fs");

//Require in friendList.json file
    var friendList = require("./friendList.json");
    console.log(friendList);

function writeFileAndPushFriendObject(newFriendToPost){
    // console.log(newFriendToPost); 
    //Convert user array into integer with loop
    for(var i = 0; i < newFriendToPost.questionArray.length; i++){
        newFriendToPost.questionArray[i] = parseInt(newFriendToPost.questionArray[i]);
    }

    //push new friend to post into friendList.json file 
    friendList.push(newFriendToPost);
    
    //using file system write to the json file

    fs.writeFile("./app/data/friendList.json", JSON.stringify(friendList, null, "\t"), 
    function(err,data){
        if(err){
            console.log(err);
        } else { 
          console.log ("friendList.json updated");
        }
    })
}

//Logic for determining who is the best match
function bestMatch(){
    //convert user results into array of numbers
    var integerComparison =[];



}







module.exports = {
    writeFileAndPushFriendObject: writeFileAndPushFriendObject
};