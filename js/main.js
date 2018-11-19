'use strict';

(function($){
	$(window).on('load', function(){
		var map;
		var mapContainer = $('#map')[0];
		var mapCenter = {lat: 52.427004, lng: 16.935959};
		map = new google.maps.Map(mapContainer, {
			center: mapCenter,
			zoom: 17
		});
	});
})(jQuery);