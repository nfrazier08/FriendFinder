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


//This function does the subtracting the two answer arrays and grabs the absolute value
function getDiffFromFriend(newFriendToPost, oneFriend){
    var diff = 0;

    //Run through answer array of newFriend
    for(var i= 0; i < newFriendToPost.questionArray.length; i++){
        //set diff to: eachFriend answer array length MINUS the answer array of each friend in list at [i]
        var eachFriendDiff = Math.abs(newFriendToPost.questionArray[i] - oneFriend.questionArray[i])
        diff += eachFriendDiff;
    }
    return diff;
}


//This function passes in each friend in the friend list for the eachFriend variable to find a match
function findFriendWithLowestDifference(newFriendToPost){
    var friendToReturn = {};
    var currentLowestDiff = 999;

    //use for loop to run through each friend in list
    for(var i = 0; i < friendList.length; i++){
        
        var totalFriendDiff = getDiffFromFriend(newFriendToPost, friendList[i]);
        console.log(totalFriendDiff);         

        if(totalFriendDiff < currentLowestDiff){
            currentLowestDiff = totalFriendDiff;
            friendToReturn = friendList[i]
        }
    } 
    console.log(friendToReturn);
    return friendToReturn;    
}


module.exports = {
    writeFileAndPushFriendObject: writeFileAndPushFriendObject,
    findFriendWithLowestDifference: findFriendWithLowestDifference
};