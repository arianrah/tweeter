$(document).ready(function() {
	$('.main-tweet-area').keyup(function() {
        $('.counter').html((140 - $(this).val().length))
        $(this).val().length > 140 ? $('.counter').css("color", "red") : $('.counter').css("color", "#545149")
    })
})