jQuery(document).ready(function($) {
	$("#lightbox").hide();
	
	// Show lightbox, load content on thumbnail click
    $('.lightbox_trigger').click(function(e) {
        e.preventDefault();
        var image_href = $(this).attr("href");
		var image_title = $(this).attr("title");
        $('#content').hide();
        $('#lightbox').fadeIn(750, function(){
            $('#content').html('<img src="' + image_href + '" /><p>' + image_title + '</p>');
            $('#content').fadeIn(500);
        });
    });
	
	
	// Close lightbox
    $('#lightbox').live('click', function() { 
        $('#lightbox').fadeOut(500);
		$('#content').empty();
    });
});

//This wants a next and back function to be called by arrow keys and buttons
//This also wants ESC key functionality!