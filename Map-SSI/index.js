//creates the map using leaflet js
    const map = L.map('map').setView([51.505, -0.09], 13);
//use street map api for tiles
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contibutors'
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const tiles = L.tileLayer(tileUrl, {attribution});
    tiles.addTo(map);
//iss api call
    const iss_api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

    async function getISS() {
            const response = await fetch(iss_api_url);
            const data = await response.json();
            const { latitude, longitude } = data;

            document.getElementById('lat').textContent = latitude;
            document.getElementById('lon').textContent = longitude;

            console.log(data);
            console.log(data.latitude);
            console.log(data.longitude);
            
        }
        // getISS()