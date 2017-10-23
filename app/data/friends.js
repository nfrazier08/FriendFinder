//This file handles writing the json file and and pushing the newFriendToPost Object
    //to the friendList.json file

//Require in file system
    var fs = require("fs");

//Require in friendList.json file
    var friendList = require("./friendList.json");
    console.log(friendList);

function writeFileAndPushFriendObject(newFriendToPost){
    console.log(newFriendToPost); 
    //push new friend to post into friendList.json file 
    friendList.push(newFriendToPost);
    
    //using file system write to the json file

    fs.writeFile("./app/data/friendList.json", JSON.stringify(friendList, null, 2), 
    function(err,data){
        if(err){
            console.log(err);
        } else { 
          console.log ("friendList.json updated");
        }
    })
}

module.exports = {
    writeFileAndPushFriendObject: writeFileAndPushFriendObject
};