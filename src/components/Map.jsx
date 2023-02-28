import React, { useState, useEffect, useRef, useCallback } from "react";
import * as geolib from "geolib";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/Map.css";
import connection from "../connection.json";
import axios from "axios"
import { Navbar } from "../components/Navbar/Navbar.jsx";
import L from "leaflet";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";
import Sehenswert from "../img/sehenswert.png";
import Natur from "../img/natur.png";
import Art from "../img/art.png";
import BestView from "../img/best-view.png";
import Cafe from "../img/cafe.png";
import Food from "../img/food.png";
import Museum from "../img/museum.png";
import Musik from "../img/musik.png";
import Park from "../img/park.png";
import Secret from "../img/secret.png";
import Shopping from "../img/shopping.png";
import WC from "../img/wc.png";

// -------
// Icons
// -------
const iconMap = {
  Sehenswert: Sehenswert,
  Natur: Natur,
  Art: Art,
  BestView: BestView,
  Cafe: Cafe,
  Food: Food,
  Museum: Museum,
  Musik: Musik,
  Park: Park,
  Secret: Secret,
  Shopping: Shopping,
  WC: WC,
};
// -------
//
// -------
// Vibration Definition
// -------
const VIBRATION_DURATION = 500; // in milliseconds
// -------
//
// -------
const Map = () => {
// -------
// useRef()
// -------
  const prevNearestMarker = useRef(null);
  const mapRef = useRef(null);
// -------
//
// -------
// useState()
// -------
  const [userLocation, setUserLocation] = useState(null);
  const [currentLatLng, setCurrentLatLng] = useState([
    52.51629872917535, 13.37805398629472,
  ]);
  const [nearestMarkers, setNearestMarkers] = useState([]);
  const [markerIcons, setMarkerIcons] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const flyToMap = mapRef.current;
  const [shouldVibrate, setShouldVibrate] = useState(false);
  const [poi, setPoi] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [liked, setLiked] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
// -------
//
// -------
// config für Axios (inkl. cors)
// -------
  const configuration = {
    method: "get",
    url: `${connection.URI}/locations`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    },
  //   'params': {
  //     'search':'parameter',
  // },
  };
// -------
//
// -------
// handle Current Location
// -------
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          flyToMap.flyTo([position.coords.latitude, position.coords.longitude], 17);
        },
        (error) => console.error(error),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  };
// -------
//
// -------
// handle Go To Berlin
// -------
  const handleGoToBerlin = () => {
    const berlinLocation = [52.516275, 13.377704];
    setUserLocation({
      latitude: parseFloat(berlinLocation[0]),
      longitude: parseFloat(berlinLocation[1]),
    });
    setNearestMarkers([]);
    setSelectedMarker(null);
    flyToMap.flyTo(berlinLocation, 18);
  };
// -------
//
// -------
// handle Marker Click ??????
// -------
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };
// -------
//
// -------
// Trigger Vibration
// -------
  const triggerVibration = useCallback((nearestMarker) => {
    if (nearestMarker && nearestMarker !== prevNearestMarker.current) {
      if (nearestMarker.distance <= 10) {
        if (navigator.vibrate) {
          navigator.vibrate(VIBRATION_DURATION);
          setShouldVibrate(true);
          prevNearestMarker.current = nearestMarker;
        }
      }
    }
  }, []);
// -------
//
// -------
// useEffect() on Vibration
// -------
useEffect(()=> {
  if (shouldVibrate) {
  const timeoutId = setTimeout(() => {
    navigator.vibrate(0);
    setShouldVibrate(false);
    // alert("DEIN GERÄT VIBRIERT JUNGE!!!!");
  }, VIBRATION_DURATION);
  return () => clearTimeout(timeoutId);
}
}, [shouldVibrate]);
// -------
//
// -------
// useEffect() on Axios => fetch data
// -------
  useEffect(() => {
axios(configuration).then((result)=> {
  setPoi(result.data.getAllLocations);
}).catch((error)=> {
  console.log(error);
})},[]);
// -------
//
// -------
// useEffect() on Nearest Markers !!!!!!!!!!!!!!!!
// -------
useEffect(() => {
  if (userLocation) {
    const nearestMarkers = poi
      .map((marker) => ({
        ...marker,
        distance: Math.min(geolib.getDistance(userLocation, marker.location)),
      }))
      .filter((marker) => marker.distance <= 5000) // <-- filter markers that are closer than 2.5km
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);
    if (selectedMarker) {
      nearestMarkers.unshift(selectedMarker);
    };
    setNearestMarkers(nearestMarkers);
    if (nearestMarkers.length === 0) {
      setNearestMarkers([]); // <-- set nearestMarkers to an empty array if there are no markers within 2.5km
    };
    const nearestMarker = nearestMarkers[0];
    triggerVibration(nearestMarker);
    
    const updatedMarkerIcons = nearestMarkers.map((marker) => ({
      ...marker,
      icon: iconMap[marker.icon],
    }));
    setMarkerIcons(updatedMarkerIcons);
  } else if (nearestMarkers.length === 0) {
    const nearestMarkers = poi.map((marker) => ({
        ...marker,
        distance: Math.min(geolib.getDistance(currentLatLng, marker.location)),
      }))
      .filter((marker) => marker.distance <= 2500) // <-- allet what 2.5km entfernt is' wird hier wie Kaffee gefiltert!
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);
      setNearestMarkers(nearestMarkers);

    if (nearestMarkers.length === 0) {
      setNearestMarkers([]); // <-- Das Array Leer machen wenn nicht within 2.5km
    };
    
    const updatedMarkerIcons = nearestMarkers.map((marker) => ({
      ...marker,
      icon: iconMap[marker.icon],
    }));
    setMarkerIcons(updatedMarkerIcons);
  };
}, [poi, userLocation, currentLatLng, selectedMarker, triggerVibration]);

// -------
//
// -------
// handle Like Favoriten
// -------
const handleLike = (markerName) => {
  setLiked({ ...liked, [markerName]: !liked[markerName] });
};
// -------
//
// -------
// handle Play Pause
// -------
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
// -------

  return (
    <div>
      <button onClick={handleGetLocation}>Zu deiner Position</button>
      <button onClick={handleGoToBerlin}>Direkt nach Berlin!</button>
      
      <Navbar className="navbarbar"/>
      
      <MapContainer
        ref={mapRef}
        center={currentLatLng}
        zoom={19}
        zoomAnimation={true}
        zoomAnimationThreshold={500} // milliseconds
        zoomAnimationDuration={500} // milliseconds
        style={{ width: "100vw", height: "75vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=Tg0TtpDNdVfwFSB0W8BZ"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {/* Loop through data */}
        {poi.map((item)=> {
  const locationLoop = item.location;
  const nameLoop = item.name;
  const infoLoop = item.info;
  const extendedInfoLoop = item.extendedInfo;
  const audioLoop = item.audioUrl;
  let iconLoop = item.icon;
  
  const lat = locationLoop.latitude;
  const lng = locationLoop.longitude;
  const latlng = [lat,lng];
        return <Marker
        key={nameLoop}
        position={latlng}
        icon={L.icon({
          iconUrl: iconMap[iconLoop],
          iconSize: [38, 38],
          iconAnchor: [22, 38],
          shadowAnchor: [4, 62],
          popupAnchor: [-3, -38],
        })}
        >
          <Popup
              className={
                nearestMarkers && nearestMarkers.includes(item)
                  ? "nearest-marker"
                  : ""
              }
            >
              <p>{nameLoop}</p>
              {showInfo ? <p>{extendedInfoLoop}</p> : <p>{infoLoop}</p>}
              <section
                onClick={() => handleLike(nameLoop)}
                className={`like-button ${liked[nameLoop] ? "liked" : ""}`}
              >
                {liked[nameLoop] ? (
                  <IconContext.Provider
                    className={"provider"}
                    value={{
                      color: "blue",
                      size: "2.5em",
                    }}
                  >
                    <AiOutlineHeart />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    className={"provider"}
                    value={{
                      color: "blue",
                      size: "2.5em",
                    }}
                  >
                    <AiFillHeart />
                  </IconContext.Provider>
                )}
              </section>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="info-button"
              >
                Mehr Information
              </button>
              <br />
              <br />
              <button
                onClick={() => handlePlayPause(audioLoop)}
                className="play-button"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </Popup>
          </Marker>
          })
        };
        {userLocation ? (
          <Marker
            position={[userLocation.latitude, userLocation.longitude]}
            key="user"
          >
            <Popup>Deine aktuelle Position</Popup>
          </Marker>
        ) : null}
        {currentLatLng && selectedMarker && (
          <Marker position={currentLatLng} key="current">
            <Popup>{selectedMarker.name}</Popup>
          </Marker>
        )}
      </MapContainer>
      {nearestMarkers.length > 0 ? (
  <div className="marker-popup">
    <ul>
      {markerIcons.map((marker) => (
        <li key={marker._id}>
          <img src={marker.icon} alt={`Marker icon for ${marker.name}`} />
          <p id="name">{marker.name}</p>
          <p id="distance">({marker.distance} m)</p>
        </li>
      ))}
    </ul>
  </div>
) : (
  <div className="marker-popup">
    <p>Keine Marker in deiner Nähe</p>
  </div>
)}
    </div>
  );
};

export default Map;
