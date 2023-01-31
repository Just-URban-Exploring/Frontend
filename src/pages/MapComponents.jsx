import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const MapComponents = () => {
  const position = [51.505, -0.09];
  const map = useMap();
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      height={500}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponents;
