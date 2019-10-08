$(document).ready(function() {
		let maxChar = 140;
	$('.tweetArea').keyup(function() {
		$('.counter').html((maxChar - $(this).val().length));
	});
});
	
	// console.log("hello")
	// console.log($('textarea'))
	// console.log($('span.counter').innerHTML)
