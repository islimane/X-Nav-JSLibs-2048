// Get some JSON text via Ajax, and write it to the p HTML page
// Get new text when clicking on "third"
//
$(document).ready(function() {
	var about = "fuenlabrada";
	var tags = "fuenlabrada";

	$("#about").keyup(function(){
		about = $(this).val();
	});

	$("#tags").keyup(function(){
		tags = $(this).val();
	});

	$("#btn").click(function(){
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + about + "&tagmode=any&format=json&jsoncallback=?";
		$.getJSON( flickerAPI, {
			tags: tags,
			tagmode: "any",
			format: "json"
		})
		.done(function( data ) {
			$.each( data.items, function( i, item ) {
				$( "#" + i ).attr( "src", item.media.m );
				if ( i === 19 ) {
					return false;
				}
			});
		});
	});
});
