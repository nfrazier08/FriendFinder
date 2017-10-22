//This file handles writing the json file and and pushing the newFriendToPost Object
    //to the friendList.json file

//Require in file system
    var fs = require("fs");

//Require in friendList.json file
    var friendList = require("./friendList.json")

function writeFileAndPushFriendObject(newFriendToPost){
    //push new friend to post into friendList.json file
    friendList.push(newFriendToPost);
    console.log(newFriendToPost);

    //using file system write to the json file
    fs.writeFile(".app/data/friendList.json", JSON.stringify(newFriendToPost), 
    function(err,data){
        if(err){
            console.log(err);
        } console.log ("friendList.json updated");            
    })
}

module.exports = {
    writeFileAndPushFriendObject: writeFileAndPushFriendObject
};