import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define city markers with colors matching the original map
const cities = [
  { name: 'Nairobi', position: [-1.286389, 36.817223], color: '#000080' },
  { name: 'Mombasa', position: [-4.043477, 39.668206], color: '#FF0000' },
  { name: 'Kisumu', position: [-0.102213, 34.761713], color: '#FFD700' },
  { name: 'Nakuru', position: [-0.303099, 36.061307], color: '#3D3D3D' },
  { name: 'Eldoret', position: [0.514277, 35.26978], color: '#add8e6' },
  { name: 'Kericho', position: [-0.3678, 35.2831], color: '#F5F5F5' },
  { name: 'Kilifi', position: [-3.6305, 39.8499], color: '#FF6347' },
  { name: 'Kwale', position: [-4.1737, 39.4606], color: '#4169E1' },
];

export function KenyaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current, {
      center: [-1.286389, 36.817223] as L.LatLngExpression,
      zoom: 6,
      minZoom: 6,
      maxZoom: 19,
      maxBounds: [
        [-5.0, 33.5],
        [5.5, 42.0],
      ] as L.LatLngBoundsExpression,
    });

    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxNativeZoom: 19,
    }).addTo(map);

    // Fit bounds
    map.fitBounds([
      [-5.0, 33.5],
      [5.5, 42.0],
    ] as L.LatLngBoundsExpression);

    // Add markers for each city
    cities.forEach((city) => {
      // Create custom marker HTML
      const markerHtml = `
        <div style="position: relative; width: 30px; height: 30px;">
          <div style="
            width: 30px;
            height: 30px;
            background-color: lightgray;
            border: 3px solid ${city.color};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            cursor: pointer;
          ">
            <div style="
              width: 10px;
              height: 10px;
              background-color: ${city.color};
              border-radius: 50%;
            "></div>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: markerHtml,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      const marker = L.marker(city.position as L.LatLngExpression, {
        icon: customIcon,
      }).addTo(map);

      // Add popup
      marker.bindPopup(`
        <div style="
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #003366;
          padding: 4px;
        ">
          ${city.name}
        </div>
      `);

      // Add tooltip
      marker.bindTooltip(`Click for ${city.name}`, {
        direction: 'top',
        offset: [0, -10],
        opacity: 0.9,
      });
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[500px] rounded-xl overflow-hidden shadow-xl"
      style={{ minHeight: '500px' }}
    />
  );
}
