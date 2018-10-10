$(document).ready(function() {
  $( "#tweeterText" ).on( "input", function() {
    var count = $("#tweeterText").val().length
    $('#charCounter').html(140 - count);
    if (count > 140) {
      console.log(count)
      $( "#charCounter" ).addClass( "overfillCounter" );
    } else {
      $( "#charCounter" ).removeClass( "overfillCounter" );
    }
  });
});



// Add listener

