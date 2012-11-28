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
        
    // Close lightbox from various clicks, excluding next/prev
    $('#lightbox #close').live('click', function() { 
        $('#lightbox').fadeOut(500);
		$('.current').removeClass('current');
    });
	
	$('#lightbox').live('click', function() {
		if(event.target != this){
			return true;
		}
		$('#lightbox #close').click();
	});
	
	$('#lightbox img').live('click', function() {
		$('#lightbox #close').click();
	});
	
	// Navigate lightbox
	$('#lightbox #left').live('click', function() {
		if (!$('.current').is($('.lightbox_trigger').first())){
			$('.current').removeClass('current').prevAll('.lightbox_trigger').first().click();
		}
	});
	
	$('#lightbox #right').live('click', function(){
		if (!$('.current').is($('.lightbox_trigger').last())) {
			$('.current').removeClass('current').nextAll('.lightbox_trigger').first().click();
		}
	})
	});

// Keyboard navigation
$(document).keyup(function(e) {
    // ESCAPE
    if (e.keyCode == 27) {
      $('#lightbox').click();
    }
	//LEFTARROW
    else if (e.keyCode == 37) {
		$('#lightbox #left').click();
    }
	//RIGHTARROW
    else if (e.keyCode == 39) {
		$('#lightbox #right').click();
	}
});