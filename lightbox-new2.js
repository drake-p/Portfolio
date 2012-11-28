$(document).ready(
	function($) {
    $("#lightbox").hide();
    
    // Show lightbox if necessary, then load and show content
    $('.lightbox_trigger').click(function(e){
        e.preventDefault();
        $(this).addClass('current');
        var image_href = $(this).attr("href");
        var image_title = $(this).attr("title");
		$('#content').hide();
        $('#lightbox').fadeIn(750, function(){
			$('#content').empty().html('<img src="' + image_href + '" /> <br/>' + image_title).fadeIn(500);
		});
    });
        
    // Close lightbox
	$('#lightbox').live('click', function() {
        $('#lightbox').fadeOut(500);
		$('.current').removeClass('current');
	});
});

// Keyboard navigation
$(document).keyup(function(e) {
    // ESCAPE
    if (e.keyCode == 27) {
      $('#lightbox').click();
    }
	//LEFTARROW
    else if (e.keyCode == 37) {
		if (!$('.current').is($('.lightbox_trigger').first())){
			$('.current').removeClass('current').prevAll('.lightbox_trigger').first().click();
		}
    }
	//RIGHTARROW
    else if (e.keyCode == 39) {
		if (!$('.current').is($('.lightbox_trigger').last())) {
			$('.current').removeClass('current').nextAll('.lightbox_trigger').first().click();
		}
	}
});