$(document).ready(function() {
		let maxChar = 140;
	$('.tweetArea').keyup(function() {
        $('.counter').html((maxChar - $(this).val().length));
        $(this).val().length > 140 ? $('.counter').css("color", "red") : $('.counter').css("color", "#545149");
    });
});