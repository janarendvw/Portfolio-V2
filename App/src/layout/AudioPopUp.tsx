import React, { useContext } from "react";
import { Volume2, VolumeX } from "react-feather";
import { audioContext } from "../App";

type Props = {};

export default function AudioPopUp({}: Props) {
  const audio = useContext(audioContext);
  const [popup, setPopup] = React.useState("flex");
  return (
    <div
      className={`w-full h-full bg-black/70 z-10 fixed ${popup} justify-center items-center`}
    >
      <div className="w-1/2 max-w-lg rounded-box p-4 bg-base-100 flex items-center justify-evenly gap-2 flex-col">
        <p className="text-xl">
          Hi there! This site uses audio to enhance the experience. Would you
          like to have this enabled by default?
        </p>{" "}
        <br />
        <p className="opacity-60 italic">
          P.S. You can always change the volume settings in the footer.
        </p>
        <span className="flex w-full gap-4 items-center justify-evenly px-2 pt-8">
          <button
            className="btn w-1/2 flex gap-2"
            onClick={() => {
              setPopup("hidden");
              audio.setMute(true);
            }}
          >
            <VolumeX /> Disable sound
          </button>
          <button
            className="btn btn-primary w-1/2 flex gap-2"
            onClick={() => {
              setPopup("hidden");
              audio.setMute(false);
            }}
          >
            <Volume2 /> Enable sound
          </button>
        </span>
      </div>
    </div>
  );
}
