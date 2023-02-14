import React, { useState, useEffect } from "react";
import geolib from "geolib";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Markers from "./Markers.jsx";
import "leaflet/dist/leaflet.css";
import "../css/Map.css";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [customLocation, setCustomLocation] = useState(null);
  const [center, setCenter] = useState([52.51629872917535, 13.37805398629472]);
  const [markers, setMarkers] = useState([]);

  console.log(markers)

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      return;
    }
    const options = {
      maximumAge: 10000,
      enableHighAccuracy: false,
      timeout: 15000,
    };
    navigator.geolocation.getCurrentPosition(
      (position) =>
        setUserLocation([position.coords.latitude, position.coords.longitude]),
      (error) => console.error(error),
      options
    );
  };

  const handleSetCustomLocation = () => {
    setCustomLocation([52.51629872917535, 13.37805398629472]);
  };

  const nearestMarkers = markers
    .map((marker) => ({
      ...marker,
      distance: Math.min(
        geolib.getDistance(userLocation, marker.position),
        geolib.getDistance(customLocation, marker.position)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);

  console.log(nearestMarkers);

  return (
    <div>
      <button onClick={handleGetLocation}>Get Location</button>
      <button onClick={handleSetCustomLocation}>Set Custom Location</button>
      <MapContainer
        center={center}
        zoom={100}
        style={{ width: "100vw", height: "80vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=5sU25nOT7O8fAUXuiaYf"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <Markers markers={nearestMarkers} />
        {userLocation ? (
          <Marker position={userLocation}>
            <Popup>Deine aktuelle Position</Popup>
          </Marker>
        ) : customLocation ? (
          <Marker position={customLocation}>
            <Popup>Deine benutzerdefinierte Position</Popup>
          </Marker>
        ) : null}
      </MapContainer>
      <div className="marker-popup">
        <h3>5 nearest markers:</h3>
        <ul>
          {nearestMarkers.map((marker) => (
            <li key={marker.id}>{marker.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;