import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/map.css";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => setUserLocation([position.coords.latitude, position.coords.longitude])
    );
  }, []);

  let center = userLocation || [52.51629872917535, 13.37805398629472];

  return (
    <MapContainer
      center={center}
      zoom={100}
      style={{ width: "100vh", height: "100vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=5sU25nOT7O8fAUXuiaYf"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>
            Deine aktuelle Position
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;