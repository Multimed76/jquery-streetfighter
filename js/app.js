$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
    })
    .mousedown(function(){
        playHadouken();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
        $('.ryu-ready').show();
    });

})
$(document).keydown(function() {
	if (event.which == 88) {
		$('.ryu-cool').show();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
	}
})
	$(document).keyup(function() {
		if (event.which == 88) {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
	}
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
