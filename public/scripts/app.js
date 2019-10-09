/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" 
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

let renderTweets = function(tweets) {
for (let tweet of tweets){
  let output = createTweetElement(tweet);
  $(`#tweet-container`).append(output);
  }
}

let createTweetElement = function(tweet) {
  let $tweets = (`
  <article class='tweet'>
  <header>
    <img src='${tweet.user.avatars}'>  
    <div>            
      <h4 class='tweet-username'>${tweet.user.name}</h4>
    <h4 class='tweet-userhandle'>${tweet.user.handle}</h4>
  </div>
  </header>
  <span class='tweet-body'>${tweet.content.text}</span>
  <footer>
    <h4 class='tweet-post-date'>${tweet.created_at}/h4>
    <div class='tweet-icons'>
        <i class="fa fa-flag"></i>
        <i class='fa fa-heart'></i>
        <i class='fa fa-refresh'></i>
    </div>
  </footer>
</article>
`);
return $tweets;
};
renderTweets(data);
})