//creates the map using leaflet js
    var map = L.map('map').setView([51.505, -0.09], 13);


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