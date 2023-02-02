import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useState } from "react";



const markers = [
  {
    name: "Brandenburger Tor",
    location: [52.516275, 13.377704], 
    info: "Berlin verdankt das Brandenburger Tor König Friedrich Wilhelm II.",
    extendedInfo: "Berlin verdankt das Brandenburger Tor König Friedrich Wilhelm II., der hatte das große Sandsteintor in Auftrag gegeben um einen würdevollen Abschluss des Pracht- Boulevards Unter den Linden zu haben. Es entstand in den Jahren 1788 bis 1791 nach Entwürfen von Carl Gotthard Langhans d.Ä., der sich stark an den Propyläen der Athener Akropolis orientierte. Zwei Jahre nach Fertigstellung des Brandenburger Tors wurde die Quadriga, ein Wagen der von vier Pferden gezogen wird, auf das Dach des Tores gesetzt."
  },
  {
    name: "Reichstagsgebäude",
    location: [52.519171, 13.377780]
  },
  {
    name: "Tiegarten",
    location: [52.513083, 13.358056]
  },
  {
    name: "Schloss Bellevue",
    location: [52.519384, 13.357190]
  },
  {
    name: "Siegessäule",
    location: [52.506916, 13.353682]
  },
  {
    name: "Museumsinsel",
    location: [52.518780, 13.404510]
  },
  {
    name: "Bode-Museum",
    location: [52.518611, 13.405556]
  },
  {
    name: "Alte Nationalgalerie",
    location: [52.518445, 13.406083]
  },
  {
    name: "Neues Museum",
    location: [52.518416, 13.406389]
  },
  {
    name: "Pergamonmuseum",
    location: [52.518445, 13.406389]
  },
  {
    name: "Altes Museum",
    location: [52.518416, 13.406389]
  },
  {
    name: "Lustgarten",
    location: [52.519336, 13.396955]
  },
  {
    name: "Berliner Dom",
    location: [52.519386, 13.403094]
  },
  {
    name: "Humboldtforum",
    location: [52.519171, 13.397500]
  },
  {
    name: "Neue Wache als Ehrenmal",
    location: [52.519528, 13.388083]
  },
  {
    name: "Humboldt-Universität",
    location: [52.517833, 13.396916]
  },
  {
    name: "Die 'Kommode' (Alte Bibliothek)",
    location: [52.517833, 13.396916]
  },
  {
    name: "Staatsoper Unter den Linden",
    location: [52.517027, 13.395833]
  },
  {
    name: "Reiterstandbild Friedrichs des Großen",
    location: [52.516836, 13.395419]
  },
  {
    name: "Weltzeituhr",
    location: [52.516386, 13.395416]
  },
  { 
    name: "Rotes Rathaus",
    location: [52.5169248, 13.3958007] },
  {
    name: "Neptunbrunnen",
    location: [52.5169248, 13.3958007] },
];


  
const Markers = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {markers.map(marker => (
        <Marker key={marker.name} position={marker.location}>
          <Popup>
            <p>{marker.name}</p>
            {showInfo ? <p>{marker.extendedInfo}</p> : <p>{marker.info}</p>}
            <button onClick={() => setShowInfo(!showInfo)}>Mehr Information</button>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default Markers;

