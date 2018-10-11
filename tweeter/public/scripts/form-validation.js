$(document).ready(function() {

            var $form = $('#newTweetForm');

            $form.on("submit", function(event) {

              var count = $(this).children("#tweeterText").val().length

              var formContent = $(this).serialize();
              event.preventDefault();

               if(count === 0) {
                alert('You forgot to add your tweet!')
              } else if (count > 140) {
                  alert("Your Tweet has too many characters!");
                  return false;
              } else {
                  $.post( "/tweets", formContent ).done(function() {
                  console.log("Data Loaded: " + formContent);
                  loadTweets();
                  })
                }
            });
});






//   $( "#newTweetForm" ).click(function() {
//     var count = $("#tweeterText").val().length
//     console.log(count);
//     $('#charCounter').html(140 - count);
//     if (count > 140) {
//       alert("Your Tweet has too many characters!");
//       return false;
//     } else if (count = 0) {
//       console.log(count);
//       alert("Your Tweet is empty!!");
//       return false;
//     }
//   });
// });





