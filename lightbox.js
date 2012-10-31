jQuery(document).ready(function($) {
    $('.lightbox_trigger').click(function(e) {
        e.preventDefault();
        var image_href = $(this).attr("href");
		var image_title = $(this).attr("title");
        if ($('#lightbox').length > 0) {
            $('#content').html('<img src="' + image_href + '" /><p>' + image_title + '</p>');
            $('#lightbox').show();
        }
        else {
            var lightbox =
            '<div id="lightbox">' +
                '<p>Click to close</p>' +
                '<div id="content">' + 
                    '<img src="' + image_href +'" />' +
					'<p>' + image_title + '</p>' +
                '</div>' +
            '</div>';
            $('body').append(lightbox);
        }
    });
    $('#lightbox').live('click', function() { 
        $('#lightbox').hide();
    });
});