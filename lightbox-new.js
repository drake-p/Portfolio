jQuery(document).ready(function($) {
    $("#lightbox").hide();
    
    // Show lightbox on thumbnail click
    $('.lightbox_trigger').click(function(e){
        e.preventDefault();
        var image_href = $(this).attr("href");
        var image_title = $(this).attr("title");
		$('#content').hide();
        $('#lightbox').fadeIn(750, function(){
			$('#content').empty().html('<img src="' + image_href + '" /><p>' + image_title + '</p>').fadeIn(500);
		});
    });
        
    // Close lightbox
    $('#lightbox').live('click', function() { 
        $('#lightbox').fadeOut(500);
    });
});
