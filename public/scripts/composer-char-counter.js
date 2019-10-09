$(document).ready(function() {
		let maxChar = 140
	$('.main-tweet-area').keyup(function() {
        $('.counter').html((maxChar - $(this).val().length))
        $(this).val().length > 140 ? $('.counter').css("color", "red") : $('.counter').css("color", "#545149")
    })
})