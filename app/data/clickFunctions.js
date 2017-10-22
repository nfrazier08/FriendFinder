$( document ).ready(function() {

    //jimi photo link: https://www.google.com/imgres?imgurl=http://img.wennermedia.com/920-width/rs-136467-2b1d08ea01d2714a82785574e1434b4dcbecbc53.jpg&imgrefurl=http://www.rollingstone.com/music/lists/100-greatest-guitarists-20111123/jimi-hendrix-20120705&h=920&w=920&tbnid=odgiDuG85b2G1M:&tbnh=186&tbnw=186&usg=__j5KQVBUIjW_aTrviQsmLAFdvXag=&vet=10ahUKEwjp0rjJvYTXAhUojFQKHZv-CM0Q_B0ItgEwFw..i&docid=hW5yY2ziuIEibM&itg=1&sa=X&ved=0ahUKEwjp0rjJvYTXAhUojFQKHZv-CM0Q_B0ItgEwFw#h=920&imgdii=9JbuiEPyfEQkqM:&tbnh=186&tbnw=186&vet=10ahUKEwjp0rjJvYTXAhUojFQKHZv-CM0Q_B0ItgEwFw..i&w=920
          
//Sumbit button click
$("#submitbtn").on("click", function(){
        event.preventDefault();
      
        var newFriend = {
            name: $("#nameInput").val(),
            photo: $("#photoLink").val(),
            questionArray:[ $("#q1").val(),
                            $("#q2").val(),
                            $("#q3").val(),
                            $("#q4").val(),
                            $("#q5").val(),
                            $("#q6").val(),
                            $("#q7").val(),
                            $("#q8").val(),
                            $("#q9").val(),
                            $("#q10").val()
                        ]            
                    }
        // console.log(newFriend);

        //AJAX here to GET newFriend object
        //I BELIEVE THIS WORKS, GETTING AN ERROR WHEN RAN BECAUSE ITS NOT FINDING THE ROUTE URL, SO SET THAT UP
        $.ajax({
            type: "POST",
            //Route for app.POST in apiRoutes
            url: "/api/postFriend",
            data: JSON.stringify(newFriend),
            dataType: 'json',
            contentType: 'application/json',
            success: function yourMatchModal(returnNewFriendObject){
                // console.log("Returned Object: " + `${returnNewFriendObject.name}` + `${returnNewFriendObject.photo}`)
                console.log(newFriend)
            }            
        });
    })


//Click function to go to survey page
$("#surveybtn").on("click", function(){
    event.preventDefault();
    console.log("working?")
    window.location.href= "/survey";
    })
});