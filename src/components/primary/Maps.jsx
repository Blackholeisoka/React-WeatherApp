import { useContext, useEffect, useRef } from 'react';
import L from 'leaflet';
import { WeatherContext } from '../../script/weatherContext';

function Maps() {
  const { data } = useContext(WeatherContext);
  const long = parseFloat(data.nearest_area[0].longitude);
  const lat = parseFloat(data.nearest_area[0].latitude);
  const area = data.nearest_area[0].areaName[0].value;

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current !== null) return;

    mapRef.current = L.map('map').setView([lat, long], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapRef.current);

    L.marker([lat, long]).addTo(mapRef.current)
      .bindPopup(area)
      .openPopup();

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [lat, long, area]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '200px', margin : '20px 0', borderRadius : '20px' }}></div>
    </div>
  );
}

export default Maps;