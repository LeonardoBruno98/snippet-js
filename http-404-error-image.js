$( document ).ready(function() {
	$( "img" ).on( "error", function() {
		var $img = $( this );
		var placeholder = location.protocol + "//" + location.host + "/images/placeholder.png";
		$img.attr( "src", placeholder );
	});
});
