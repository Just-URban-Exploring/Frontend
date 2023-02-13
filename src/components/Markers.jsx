import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useState, useRef } from "react";
import L from "leaflet";




const markers = [
  {
    name: "Brandenburger Tor",
    location: [52.516275, 13.377704], 
    info: "Berlin verdankt das Brandenburger Tor König Friedrich Wilhelm II.",
    extendedInfo: "Berlin verdankt das Brandenburger Tor König Friedrich Wilhelm II., der hatte das große Sandsteintor in Auftrag gegeben um einen würdevollen Abschluss des Pracht- Boulevards Unter den Linden zu haben. Es entstand in den Jahren 1788 bis 1791 nach Entwürfen von Carl Gotthard Langhans d.Ä., der sich stark an den Propyläen der Athener Akropolis orientierte. Zwei Jahre nach Fertigstellung des Brandenburger Tors wurde die Quadriga, ein Wagen der von vier Pferden gezogen wird, auf das Dach des Tores gesetzt.",
    icon: "#",
    audioUrl: "https://dl.sndup.net/j59w/Berlin%20verdankt%20das%20Brandenburger%20Tor%20K%C3%B6%20(1).mp3"
  },
  {
    name: "Quadriga auf dem Brandenburger Tor",
    location: [52.51629872917535, 13.37805398629472],
    info: "Symbol der Einheit",
    extendedInfo:
    "Die Quadriga auf dem Brandenburger Tor ist eines der bekanntesten Wahrzeichen Berlins und Deutschlands. Die viergespannte Pferdekutsche mit der Siegesgöttin ist ein Symbol für den Sieg und die Einheit des Landes.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
    },
    {
    name: "Reichstag",
    location: [52.519171, 13.377722],
    info: "Sitz des Deutschen Bundestages",
    extendedInfo:
    "Der Reichstag ist ein historisches Gebäude in Berlin und seit 1999 Sitz des Deutschen Bundestages. Es war früher das Parlamentsgebäude des Deutschen Kaiserreichs und des Deutschen Reiches und ist heute ein wichtiger Touristenort.",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
    },
  {
    name: "Tiegarten",
    location: [52.513083, 13.358056],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Schloss Bellevue",
    location: [52.519384, 13.357190],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Siegessäule",
    location: [52.506916, 13.353682],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Museumsinsel",
    location: [52.518780, 13.404510],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Bode-Museum",
    location: [52.518611, 13.405556],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Alte Nationalgalerie",
    location: [52.518445, 13.406083],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Neues Museum",
    location: [52.518416, 13.406389],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Pergamonmuseum",
    location: [52.518445, 13.406389],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Altes Museum",
    location: [52.518416, 13.406389],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Lustgarten",
    location: [52.519336, 13.396955],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Berliner Dom",
    location: [52.519386, 13.403094],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Humboldtforum",
    location: [52.519171, 13.397500],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Neue Wache als Ehrenmal",
    location: [52.519528, 13.388083],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Humboldt-Universität",
    location: [52.517833, 13.396916],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Die 'Kommode' (Alte Bibliothek)",
    location: [52.517833, 13.396916],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Staatsoper Unter den Linden",
    location: [52.517027, 13.395833],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Reiterstandbild Friedrichs des Großen",
    location: [52.516836, 13.395419],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Weltzeituhr",
    location: [52.516386, 13.395416],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  { 
    name: "Rotes Rathaus",
    location: [52.5169248, 13.3958007],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
  {
    name: "Neptunbrunnen",
    location: [52.5169248, 13.3958007],
    extendedInfo: "#",
    icon: "https://disdukcapil.lampungtengahkab.go.id/upload/strukturorganisasi.jpg"
  },
];

const Markers = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [liked, setLiked] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const customIcon = L.icon({
    iconUrl: markers[0].icon,
    iconSize:     [38, 38],
    iconAnchor:   [22, 38],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -38]
  });

  const handleLike = (markerName) => {
    setLiked({ ...liked, [markerName]: !liked[markerName] });
  };

  const handlePlayPause = (audioUrl) => {
    if (isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      const audio = new Audio(audioUrl);
      audio.play();
      setCurrentAudio(audio);
      setIsPlaying(true);
    }
  };

  return (
    <>
      {markers.map(marker => (
        <Marker key={marker.name} position={marker.location} icon={customIcon}>
          <Popup>
            <p>{marker.name}</p>
            {showInfo ? <p>{marker.extendedInfo}</p> : <p>{marker.info}</p>}
            <button
              onClick={() => handleLike(marker.name)}
              style={{
                backgroundColor: liked[marker.name] ? 'red' : 'lightblue',
                border: `2px solid ${liked[marker.name] ? 'red' : 'lightblue'}`,
                padding: "8px 8px",
                fontSize: "15px",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              {liked[marker.name] ? 'Liked' : 'Like'}
            </button>
            <button onClick={() => setShowInfo(!showInfo)}
              style={{
                backgroundColor: "lightblue",
                border: "2px solid lightblue",
                padding: "8px 8px",
                fontSize: "15px",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              Mehr Information
            </button>
            <br />
            <br />
            <button onClick={() => handlePlayPause(marker.audioUrl)}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default Markers