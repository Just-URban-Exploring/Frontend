import React, {useState} from "react";
import { MdHeadset, MdHeadsetOff } from "react-icons/md";
import '../css/audioguide.css';



const Audioguide = () => {

  const [audioState, setAudioState] = useState(1);

  function toggleActive(index) {
    setAudioState(index)
  }

  return (
    <div>
      <div>
        <button className={audioState === 0 ? 'active' : 'inactive'} onClick={() => {toggleActive(0)}}>
          <MdHeadset />
        </button>
      </div>
      <div>
        <button className={audioState === 1 ? 'active' : 'inactive'} onClick={() => {toggleActive(1)}} >
          <MdHeadsetOff />
        </button>
      </div>
    </div>
  );
};

export default Audioguide;
