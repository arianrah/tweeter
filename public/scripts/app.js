$(document).ready(function() {
  //nav-new-tweet button: toggle textarea
  $(".nav-new-tweet").click(function(){
    $(".new-tweet").slideToggle(500);
    $('.main-tweet-area').focus();
  });

//error default: hide
$('.new-tweet-error').hide();

//client-server interaction for new tweet
$( "#tweet-form" ).on( "submit", function( event ) {
  event.preventDefault();
  let tweetBody = $( this ).serialize();
  if (!$('.main-tweet-area').val()) {
    $(".new-tweet-error").html('Empty Tweet! 🐦😡').show().delay(2500).fadeOut();
  }
  if ($('.main-tweet-area').val().length > 140) {
    $(".new-tweet-error").html('YOU HAVE SAID TOO MUCH 🤫').show().delay(2500).fadeOut();
  } else {
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: tweetBody
    })
      .then(loadTweets);
    }
  });

}); //end of document.ready

  let loadTweets = () => {
    $('textarea').val('')
    $.get('/tweets', function(res){
     renderTweets(res);
    })
};

//render tweets
let renderTweets = (tweets) => {
  $('#tweet-container').empty();
  for (let tweet of tweets){
    let output = createTweetElement(tweet);
    $(`#tweet-container`).prepend(output);
  }
}

//client input script stopper
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//used by render tweets to plug in data to template
let createTweetElement = function(tweet) {
  let date = new Date(tweet.created_at).toDateString();
  let $tweets = (`
    <article class='tweet'>
    <header>
      <img lass ='tweet-image' src='${ tweet.user.avatars }'>  
      <div>            
        <h4 class='tweet-username'>${ tweet.user.name }</h4>
      <h4 class='tweet-userhandle'>${ tweet.user.handle }</h4>
    </div>
    </header>
    <span class='tweet-body'>${ escape(tweet.content.text) }</span>
    <footer>
      <h4 class='tweet-post-date'>${ date }</h4>
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