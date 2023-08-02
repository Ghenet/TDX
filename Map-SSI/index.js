//creates the map using leaflet js and tiles using openstreet map api
   
    const map = L.map('map').setView([0, 0], 2);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contibutors'
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const tiles = L.tileLayer(tileUrl, {attribution});
    tiles.addTo(map);
//making a marker with a custom icon
    const issIcon = L.icon({
        iconUrl: 'SpaceStation.png',
        iconSize: [30, 22],
        iconAnchor: [25, 16],
        
    });
    const marker = L.marker([0, 0],{icon: issIcon}).addTo(map);

//iss api call
    const iss_api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

    async function getISS() {
            const response = await fetch(iss_api_url);
            const data = await response.json();
            const { latitude, longitude } = data;

            // L.marker([latitude, longitude]).addTo(map);
            marker.setLatLng([latitude, longitude]);
            map.setView([latitude, longitude],7); //zooms the map to 4 where the ISS is in the specified LatLng

            document.getElementById('lat').textContent = latitude.toFixed(2);
            document.getElementById('lon').textContent = longitude.toFixed(2);

            console.log(data);
        }
         getISS()

          setInterval(getISS, 1000)