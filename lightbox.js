jQuery(document).ready(function($) {
	$("#lightbox").hide();
    $('.lightbox_trigger').click(function(e) {
        e.preventDefault();
        var image_href = $(this).attr("href");
		var image_title = $(this).attr("title");
        if ($('#lightbox').length > 0) {
			$('#content').hide();
            $('#lightbox').fadeIn(750, function(){
				$('#content').html('<img src="' + image_href + '" /><p>' + image_title + '</p>');
				$('#content').fadeIn(500);
			});
        }
    });
    $('#lightbox').live('click', function() { 
        $('#lightbox').fadeOut(500);
		$('#content').empty();
    });
});

//This wants a next and back function to be called by arrow keys and buttons
//This also wants ESC key functionality!