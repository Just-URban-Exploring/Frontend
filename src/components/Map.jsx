import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Markers from "./Markers.jsx";
import "leaflet/dist/leaflet.css";
import "../css/map.css";


const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [center, setCenter] = useState([52.51629872917535, 13.37805398629472]);
  const [markers, setMarkers] = useState([
    { id: 1, position: [51.5, -0.09], popupText: "Marker 1" },
    { id: 2, position: [51.51, -0.08], popupText: "Marker 2" },
  ]);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => setUserLocation([position.coords.latitude, position.coords.longitude]),
      error => console.error(error)
    );
  }, []);

  const handleJumpToUserLocation = () => {
    if (userLocation) {
      setCenter(userLocation);
    }
  };

  return (
    <div>
      <MapContainer
        center={center}
        zoom={100}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=5sU25nOT7O8fAUXuiaYf"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <Markers markers={markers} />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>
              Deine aktuelle Position
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;