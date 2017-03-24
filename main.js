function initMap() {
	var spot = {lat: 40.71, lng: -74};
	var mapCon = document.getElementById('map')
	var map = new google.maps.Map(mapCon, {
	  	zoom: 15,
	  	center: spot
	});
	var marker = new google.maps.Marker({
	  position: spot,
	  map: map
	});
}

window.initMap=initMap;