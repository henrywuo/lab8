function initMap() {
	// add your code here
	L.mapquest.key = 'mKTZELg4RaRk9KacqBgt9I4GyE9bPQRD';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.878833, -117.235912],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//add marker on map
	L.marker([32.878833, -117.235912]).addTo(map);
}