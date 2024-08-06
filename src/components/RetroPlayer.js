import React, { useState, useRef } from "react";
import "./retroplayer.css";

export default function RetroPlayer({
  marginTop = "30px",
  width = "100%",
  color = "#F7CB3F",
  shadow = "#D5B22D",
  song,
  title,
  artist,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleFastForward = () => {
    audioRef.current.currentTime += 10; // Fast forward by 10 seconds
  };

  const handleRewind = () => {
    audioRef.current.currentTime -= 10; // Rewind by 10 seconds
  };

  return (
    <div
      className="retro-player"
      style={{
        width,
        backgroundColor: color,
        boxShadow: `9px 7px ${shadow}, 9px 7px 0 2px black`,
        marginTop,
      }}
    >
      <div className="title">
        <marquee>
          {title} - {artist}{" "}
        </marquee>
      </div>{" "}
      <audio ref={audioRef} loop onTimeUpdate={handleTimeUpdate}>
        <source src={song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="progress-bar">
        <progress
          value={currentTime}
          max={audioRef.current && audioRef.current.duration}
          style={{ height: "15px" }}
        />
      </div>
      <div className="controls">
        <div
          className="music-buttons"
          onClick={handleRewind}
          style={{ marginRight: "10px" }}
        >
          <Rewind />
        </div>
        <div className="play-pause">
          <div
            className="music-buttons"
            onClick={togglePlay}
            style={{ marginRight: "10px" }}
          >
            <Pause />
          </div>

          <div
            className="music-buttons"
            onClick={togglePlay}
            style={{ marginRight: "10px" }}
          >
            <Play />
          </div>
        </div>

        <div
          className="music-buttons"
          onClick={handleFastForward}
          style={{ marginRight: "10px" }}
        >
          <FastForward />
        </div>
      </div>
    </div>
  );
}

function Play() {
  return (
    <svg
      id="uuid-00d4d597-534a-41d8-aa3d-0d869d1dfe90"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6.31 9.26"
      style={{ marginRight: "-3px" }}
    >
      <polygon
        points=".25 .49 .25 8.77 5.89 4.63 .25 .49"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </svg>
  );
}

function Pause() {
  return (
    <svg
      id="uuid-aa47ae26-d22e-4a2f-87cc-1c34cfc11445"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5 8.77"
    >
      <rect
        x="3.43"
        y=".25"
        width="1.32"
        height="8.27"
        fill="#f6915e"
        strokeWidth="0"
      />
      <rect
        x="3.43"
        y=".25"
        width="1.32"
        height="8.27"
        fill="none"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <rect
        x=".25"
        y=".25"
        width="1.32"
        height="8.27"
        fill="#f6915e"
        strokeWidth="0"
      />
      <rect
        x=".25"
        y=".25"
        width="1.32"
        height="8.27"
        fill="none"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </svg>
  );
}

function Rewind() {
  return (
    <svg
      id="uuid-8d4bd026-a300-4af9-8d6a-7fc7a062c27d"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7.39 9.26"
    >
      <polygon
        points="7.14 .49 7.14 8.77 1.5 4.63 7.14 .49"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <rect
        x=".25"
        y=".49"
        width="1.32"
        height="8.27"
        transform="translate(1.82 9.26) rotate(-180)"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </svg>
  );
}

function FastForward() {
  return (
    <svg
      id="uuid-9ce83cdc-df66-4f2a-a3ab-6975be1ff15f"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7.39 9.26"
    >
      <polygon
        points=".25 .49 .25 8.77 5.89 4.63 .25 .49"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <rect
        x="5.82"
        y=".49"
        width="1.32"
        height="8.27"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </svg>
  );
}
