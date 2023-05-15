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
