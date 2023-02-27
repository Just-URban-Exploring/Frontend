import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useState, useRef } from "react";
import "../css/Map.css";
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

export const markers = [].map((marker) => ({
  ...marker,
  locationObject: L.latLng(marker.location.latitude, marker.location.longitude),
}));
{WC}
const Markers = ({ markers, nearestMarkers, onMarkerClick }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [liked, setLiked] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

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
      {Array.isArray(markers) &&
        markers.map((marker) => (
          <Marker
            key={marker.name}
            position={marker.locationObject}
            icon={L.icon({
              iconUrl: marker.icon,
              iconSize: [38, 38],
              iconAnchor: [22, 38],
              shadowAnchor: [4, 62],
              popupAnchor: [-3, -38],
            })}
          >
            <Popup
              className={
                nearestMarkers && nearestMarkers.includes(marker)
                  ? "nearest-marker"
                  : ""
              }
            >
              <p>{marker.name}</p>
              {showInfo ? <p>{marker.extendedInfo}</p> : <p>{marker.info}</p>}
              <section
                onClick={() => handleLike(marker.name)}
                className={`like-button ${liked[marker.name] ? "liked" : ""}`}
              >
                {liked[marker.name] ? (
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
                onClick={() => handlePlayPause(marker.audioUrl)}
                className="play-button"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </Popup>
          </Marker>
        ))}
    </>
  );
};

export default Markers;
