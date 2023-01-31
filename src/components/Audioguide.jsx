import React from "react";
import { MdHeadset, MdHeadsetOff } from "react-icons";

const Audioguide = () => {
  return (
    <div>
      <div>
        <button>
          <MdHeadset />
        </button>
      </div>
      <div>
        <button>
          <MdHeadsetOff />
        </button>
      </div>
    </div>
  );
};

export default Audioguide;
