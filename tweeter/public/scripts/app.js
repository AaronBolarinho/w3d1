/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 function createTweetElement (tweet) {

      return $(`<article class="tweet">
                <header class="tweet-header">
                <img src="https://shawglobalnews.files.wordpress.com/2018/05/gettyimages-860271678.jpg?quality=70&strip=all&w=720" alt="Temporary image">
                  <span class="tweeter-name"> ${tweet.user.name}</span>
                  <span class="tweeter-handle"> ${tweet.user.handle}</span>
                 </header>
                <p>${tweet.content.text}</p>
                <footer>
                  <span class="last-tweeted">${tweet.created_at}</span>
                </footer>
                </article>`);
 };

function renderTweets(tweets) {
  $('.tweet-container').empty();
  tweets.forEach(function(tweet){
  let $tweet = createTweetElement(tweet);
  $('.tweet-container').append($tweet);
  })
};

function loadTweets(tweets) {
    $.ajax('/tweets', { method: 'GET' }).done(function(data) {
      console.log("render tweets", data);
      renderTweets(data);
    })
  }

$(document).ready(function() {

 loadTweets();
 // renderTweets(data);

});