//This file handles writing the json file and and pushing the newFriendToPost Object
    //to the friendList.json file

//Require in file system
    var fs = require("fs");

//Require in friendList.json file
    var friendList = require("./friendList.json");
    // console.log(friendList);

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

//YOU WILL NEED TO FIND THE MIN OF ALL THE SCORES ARRAY

function checkSumofCurrentUserQuestions(newFriendToPost){
    var sum = 0;
    for(var i= 0; i < newFriendToPost.questionArray.length; i++){
        sum = sum + newFriendToPost.questionArray[i];
    }
    console.log(sum)
}


module.exports = {
    writeFileAndPushFriendObject: writeFileAndPushFriendObject,
    checkSumofCurrentUserQuestions: checkSumofCurrentUserQuestions
};