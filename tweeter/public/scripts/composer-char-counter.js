$(document).ready(function() {
  $( "#tweeterText" ).on( "keydown", function() {
    var count = $("#tweeterText").val().length
    $('#charCounter').html(140 - count);
      if (count > 140) {
        console.log(count)
        $("#charCounter").css("color", "red");
      } else {
        $("#charCounter").css("color", "black");
      };
  });
});



// Add listener
 // '#charCounter'.addEventListener('keypress', callback);


 // $("#charCounter").css("color", "red");
 //      } else {
 //        $("#charCounter").css("color", "black");
 //      };