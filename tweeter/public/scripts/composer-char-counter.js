$(document).ready(function() {

  $( "#tweeterText" ).on( "keydown", function() {
    var count = $("#tweeterText").val().length

    $('#charCounter').html(140 - count);
      });

  });



// Add listener
 // '#charCounter'.addEventListener('keypress', callback);