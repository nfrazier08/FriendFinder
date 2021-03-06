$( document ).ready(function() {

 
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
            success: function(assignedFriend){
                console.log(assignedFriend)
                //modal of assigned friend information, create HTML
                $('#myModal').modal('toggle')
                $("#nameOfFriend").html("You're Matched Friend: " + assignedFriend.name);
                $("#matchedPhoto").attr('src', assignedFriend.photo);
            }
        });
    })
    
    // $("#friendModal").modal('toggle');

//Click function to go to survey page
$("#surveybtn").on("click", function(){
    event.preventDefault();
    console.log("working?")
    window.location.href= "/survey";
    })
});