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
        console.log(newFriend);
    })
// });

$("#surveybtn").on("click", function(){
    event.preventDefault();
    console.log("working?")
    window.location.href= "/survey";
    })
});