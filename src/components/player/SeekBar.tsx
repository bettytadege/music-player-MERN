import React from "react";
// import { usePlayerContext } from '../../context/PlayerContext'

interface Time {
  min: number;
  sec: number;
}

interface SeekBarInterfce {
  audioref: React.MutableRefObject<HTMLAudioElement | null>;
  seekbar: React.MutableRefObject<HTMLInputElement | null>;
  seekbg: React.MutableRefObject<HTMLInputElement | null>;
  time: {
    currentTime: Time;
    totalTime: Time;
  };
}
function SeekBar({ seekbar, time, audioref, seekbg }: SeekBarInterfce) {

  const currentTime = audioref.current?.currentTime || 0;
  const duration = audioref?.current?.duration || 0;
  const width = duration ? Math.floor((currentTime / duration) * 100) + "%" : "0%"

  return (
    <div>
      <div className="flex items-center gap-8  ">
        <div className="hidden lg:block ">
          <div className="flex items-center gap-4">
            <p className="text-sm">
              {time.currentTime.min}:{time.currentTime.sec}
            </p>
            <div
              ref={seekbar}
              className="  lg:w-[400px] md:max-w-[300px]  bg-[#333333] rounded-full cursor-pointer"
            >
              
              <div
                ref={seekbg}
                className="h-1 border-none  bg-green-500 rounded-full"
                style={{width: width}}
              />
            </div>
            <p className="text-sm">
              {time.totalTime.min}:{time.totalTime.sec}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeekBar;
