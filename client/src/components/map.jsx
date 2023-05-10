/*import React, { useRef, useEffect, useState } from 'react';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [nearbyGyms, setNearbyGyms] = useState([]);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tilehosting.com/styles/streets/style.json?key={QSuL3qpAZcPzrtCo2hyU}',
      center: [lng, lat],
      zoom: zoom
    });
    marker.current = new maplibregl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    navigator.geolocation.getCurrentPosition(async position => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
      map.current.setCenter([position.coords.longitude, position.coords.latitude]);
      marker.current.setLngLat([position.coords.longitude, position.coords.latitude]);

      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
      const data = await response.json();
      const name = data.display_name;

      const response2 = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&q=gym&limit=10&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
      const data2 = await response2.json();
      const features = data2;

      const gyms = [];
      features.forEach(feature => {
        const { display_name, lat, lon } = feature;
        const gym = {
          name: display_name,
          location: [lon, lat]
        };
        gyms.push(gym);
        new maplibregl.Marker({ color: 'green' })
          .setLngLat([lon, lat])
          .addTo(map.current);
      });
      setNearbyGyms(gyms);
    });
  }, [lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
*/


/*import React, { useRef, useEffect, useState } from 'react';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [nearbyGyms, setNearbyGyms] = useState([]);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(14);
  const [API_KEY] = useState('FZT7hZoohtpQoDTWktP6');

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    marker.current = new maplibregl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    navigator.geolocation.getCurrentPosition(async position => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
      map.current.setCenter([position.coords.longitude, position.coords.latitude]);
      marker.current.setLngLat([position.coords.longitude, position.coords.latitude]);

      const response = await fetch(`https://api.maptiler.com/maps/streets-v2/places/${position.coords.longitude},${position.coords.latitude}.json?key=${API_KEY}`);
      const data = await response.json();
      const features = data.features;

      const gyms = [];
      features.forEach(feature => {
        const { name, coordinates } = feature;
        const gym = {
          name: name,
          location: coordinates
        };
        gyms.push(gym);
        new maplibregl.Marker({ color: 'green' })
          .setLngLat(coordinates)
          .addTo(map.current);
      });
      setNearbyGyms(gyms);
    });
  }, [lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

*/

import React, { useRef, useEffect, useState } from 'react';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [nearbyGyms, setNearbyGyms] = useState([]);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(14);
  const [API_KEY] = useState('FZT7hZoohtpQoDTWktP6');

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    marker.current = new maplibregl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    navigator.geolocation.getCurrentPosition(position => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
      map.current.setCenter([position.coords.longitude, position.coords.latitude]);
      marker.current.setLngLat([position.coords.longitude, position.coords.latitude]);
    });
  }, [lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}



/*
import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
const API_KEY = 'FZT7hZoohtpQoDTWktP6';

export default function Map() {
  const mapRef = useRef(null);
  const [nearbyGyms, setNearbyGyms] = useState([]);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    // create map and center it on the user's location
    const map = L.map(mapRef.current).setView([lat, lng], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);


    function distance(lat1, lon1, lat2, lon2) {
      const R = 6371e3; // Earth radius in meters
      const phi1 = lat1 * Math.PI / 180;
      const phi2 = lat2 * Math.PI / 180;
      const deltaPhi = (lat2 - lat1) * Math.PI / 180;
      const deltaLambda = (lon2 - lon1) * Math.PI / 180;
    
      const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
      return R * c;
    };
    
    
    // add markers for nearby sports centers
    async function getNearbyGyms(lng, lat) {
      const gyms = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?proximity=${lng},${lat}&access_token=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          const features = data.features;
          const gymFeatures = features.filter(feature => feature.properties.category === 'fitness');
          return gymFeatures;
        })
        .catch(error => console.log(error));
      
      if (map.current) {
        const nearbyGyms = map.current.queryRenderedFeatures({
          layers: ['gyms']
        }).filter(gym => gym.geometry.coordinates)
          .map(gym => {
            return {
              name: gym.properties.name,
              address: gym.properties.address,
              distance: distance(lng, lat, gym.geometry.coordinates[0], gym.geometry.coordinates[1])
            }
          })
          .sort((a, b) => a.distance - b.distance);
    
        setNearbyGyms(nearbyGyms);
      }
      
      return gyms;
    };

    getNearbyGyms();

    // update map position when user moves the map
    map.on('moveend', () => {
      setLat(map.getCenter().lat.toFixed(4));
      setLng(map.getCenter().lng.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
      getNearbyGyms();
    });

    // center map on user's location
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      map.setView([position.coords.latitude, position.coords.longitude], zoom);
    });
  }, []);

  return (
    <div className="map-wrap">
      <div ref={mapRef} className="map"></div>
    </div>
  );
}


*/


/*
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // create map and set initial view to a default location
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    // add tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // add a marker to the map at the default location
    L.marker([51.505, -0.09]).addTo(map);
  }, []);

  return <div ref={mapRef} style={{ height: '500px' }}></div>;
};

export default Map;
*/
/*
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

const Map = () => {
  const mapRef = useRef(null);
  const geocoderRef = useRef(null);

  useEffect(() => {
    // create map and set initial view to a default location
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    // add tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // add search field to the map
    geocoderRef.current = L.Control.geocoder({
      defaultMarkGeocode: false,
    }).on('markgeocode', function (e) {
      // center the map on the selected location
      map.setView(e.geocode.center, 13);

      // add a marker to the map at the selected location
      L.marker(e.geocode.center).addTo(map);
    }).addTo(map);

    // search for gyms in the map area
    searchForGyms(map);
  }, []);

  const searchForGyms = (map) => {
    // set search parameters
    const params = {
      q: 'gym',
      format: 'json',
      addressdetails: 1,
      bounded: 1,
      viewbox: map.getBounds().toBBoxString(),
    };

    // make a request to the Nominatim Search API
    fetch(`https://nominatim.openstreetmap.org/search?${new URLSearchParams(params)}`)
      .then(response => response.json())
      .then(data => {
        // add markers for each gym found
        data.forEach(result => {
          const marker = L.marker([result.lat, result.lon]).addTo(map);
          const popupContent = `
            <b>${result.display_name}</b><br>
            ${result.address.postcode} ${result.address.city}<br>
            ${result.address.road} ${result.address.house_number}
          `;
          marker.bindPopup(popupContent);
        });
      })
      .catch(error => console.error(error));
  };  

  return <div ref={mapRef} style={{ height: '500px' }}></div>;
};

export default Map;
*/