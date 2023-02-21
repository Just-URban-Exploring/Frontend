import React, { useState, useEffect } from "react";
import * as geolib from "geolib";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Markers from "./Markers.jsx";
import { markers } from "./Markers";
import "leaflet/dist/leaflet.css";
import "../css/Map.css";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  // const [currentLatLng, setCurrentLatLng] = useState([
  //   52.51629872917535, 13.37805398629472,
  // ]);
  const [nearestMarkers, setNearestMarkers] = useState([]);
  const [markerIcons, setMarkerIcons] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        (error) => console.error(error),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  };

  const handleGoToBerlin = () => {
    setUserLocation({
      latitude: 52.516275,
      longitude: 13.377704,
    });
    setNearestMarkers([]);
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  useEffect(() => {
    if (userLocation) {
      const nearestMarkers = markers
        .map((marker) => ({
          ...marker,
          distance: Math.min(geolib.getDistance(userLocation, marker.location)),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);
      setNearestMarkers(nearestMarkers);
      console.log(userLocation);
      const icons = nearestMarkers.map((marker) => marker.icon);
      setMarkerIcons(icons);
    }
  }, [markers, userLocation]);

  return (
    <div>
      <button onClick={handleGetLocation}>Get My Location</button>
      <button onClick={handleGoToBerlin}>Go to Berlin</button>
      <MapContainer
        center={userLocation}
        zoom={19}
        style={{ width: "100vw", height: "80vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=5sU25nOT7O8fAUXuiaYf"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <Markers markers={markers} onMarkerClick={handleMarkerClick} />
        {userLocation ? (
          <Marker
            position={[userLocation.latitude, userLocation.longitude]}
            key="user"
          >
            <Popup>Deine aktuelle Position</Popup>
          </Marker>
        ) : null}
      </MapContainer>
      {nearestMarkers.length > 0 ? (
        <div className="marker-popup">
          {/* <h3>5 nearest markers:</h3> */}
          <ul>
            {nearestMarkers.map((marker) => (
              <li key={marker.name}>
                <div>
                  <img
                    src={marker.icon}
                    alt={`Marker icon for ${marker.name}`}
                  />
                  <span>{marker.name}</span>
                </div>
                <span>({marker.distance} meter weg)</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="marker-popup">
          <p>No markers are nearby</p>
        </div>
      )}
    </div>
  );
};

export default Map;
