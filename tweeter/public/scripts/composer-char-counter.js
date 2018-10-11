function characterCounter() {
    var count = $(this).val().length
    $(this).siblings('#charCounter').html(140 - count);
    if (count > 140) {
      console.log(count)
      $(this).siblings('#charCounter').addClass( "overfillCounter" );
    } else {
      $(this).siblings('#charCounter').removeClass( "overfillCounter" );
    }
}

// function formSubmit(event) {
//   event.preventDefault();

//   const errors = validateForm()

//   if (errors)
//   if (validateForm()) {
//     // do post
//   } else {
//     display error
//   }
// }

$(document).ready(function() {
  $( "#tweeterText" ).on( "input", characterCounter)
});

// Add listener

