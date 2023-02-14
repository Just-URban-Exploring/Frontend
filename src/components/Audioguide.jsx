import React, {useState} from "react";
import { MdHeadset, MdHeadsetOff } from "react-icons/md";
import '../css/audioguide.css';



const Audioguide = () => {

  const [audioState, setAudioState] = useState(1);

  function toggleActive(index) {
    setAudioState(index)
  }

  return (
    <div className="audioGuideBtn">
      <div>
        <button className={` headsetBtn ${audioState === 0 ? 'active' : 'inactive'}`} onClick={() => {toggleActive(0)}}>
          <MdHeadset /> Audioguide AN
        </button>
      </div>
      <div>
        <button className={` headsetBtn ${audioState === 1 ? 'active' : 'inactive'}`} onClick={() => {toggleActive(1)}} >
          <MdHeadsetOff /> Audioguide AUS
        </button>
      </div>
    </div>
  );
};

export default Audioguide;
