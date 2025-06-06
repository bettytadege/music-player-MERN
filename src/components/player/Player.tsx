// import React, { useState } from "react";
import { usePlayerContext } from "../../context/PlayerContext";
import SeekBar from "./SeekBar";
import Speaker from "./Speaker";
import PlayerDetails from "./PlayerDetails";
import PlayerButton from "./PlayerButton";

function Player() {
  const palyerContext = usePlayerContext();
  if (!palyerContext) {
    return null;
  }
  const {
    seekbar,
    seekbg,
    isPlaying,
    handlePlayPause,
    album,
    time,
    prevTrack,
    nextTrack,
    audioref,
    setTime,
    currentIndex,
  } = palyerContext;
  // console.log(album,'from player')

  const onPlaying = () => {
    if (audioref.current)
      setTime({
        currentTime: {
          min: Math.floor(audioref.current.currentTime / 60),
          sec: Math.floor(audioref.current.currentTime % 60),
        },
        totalTime: {
          min: Math.floor(audioref.current.duration / 60),
          sec: Math.floor(audioref.current.duration % 60),
        },
      });
  };


  if (album == undefined) {
    return <></>;
  }

  return (
    <>
      <div className="bg-black w-full">
        <audio
          preload="auto"
          ref={audioref}
          src={album.track[currentIndex].track_url}
          onTimeUpdate={() => onPlaying()}
          autoPlay={isPlaying}
        ></audio>
        <div className="border-t-[#333333] border-t h-[5.2rem] hidden md:block">
          <div className="flex w-full justify-between items-center px-10">
            <PlayerDetails album={album} />
            {/* <div className="flex justify-center items-center gap-14"> */}
              <PlayerButton
                isPlaying={isPlaying}
                nextTrack={nextTrack}
                prevTrack={prevTrack}
                handlePlayPause={handlePlayPause}
              />
              <SeekBar
                seekbar={seekbar}
                seekbg={seekbg}
                time={time}
                audioref={audioref}
              />
              <Speaker  audioref={audioref}/>
            {/* </div>s */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
