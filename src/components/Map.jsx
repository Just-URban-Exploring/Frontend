import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/map.css";

const center = [52.51629872917535, 13.37805398629472];

const Map = () => {
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
      <Marker position={center}>
        <Popup>
          Brandenburger Tor <br /> Klicke für mehr Informationen.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
