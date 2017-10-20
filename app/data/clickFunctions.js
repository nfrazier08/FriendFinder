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

        //AJAX here to GET newFriend object
        $.ajax({
            type: "POST",
            //Route for app.POST in apiRoutes
            url: "/api.postFriend",
            data: JSON.stringify(newFriend),
            dataType: JSON,
            success: function yourMatchModal(){
                html += '<div>'
            }
            
    });
})

//Code for the modal
<div class="modal fade bs-example-modal-sm" id="wrongBoxColor" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                Uh-oh! Those colors don't match!
            </div>
        </div>
    </div>


//Click function to go to survey page
$("#surveybtn").on("click", function(){
    event.preventDefault();
    console.log("working?")
    window.location.href= "/survey";
    })
});