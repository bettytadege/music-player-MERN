import React, { useState, useEffect } from 'react';
import { HiMiniSpeakerWave } from 'react-icons/hi2';

interface SpeakerProps {
  audioref: React.MutableRefObject<HTMLAudioElement | null>;
}

function Speaker({ audioref }: SpeakerProps) {
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (audioref.current) {
      audioref.current.volume = volume; 
    }
  }, [volume, audioref]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume); // Update the volume state
  };

  return (
    <div className="lg:flex items-center md:hidden sm:hidden hidden">
    <div className="">
      <div className="gap-5 w-[200px] rounded-full flex items-center justify-center">
      <HiMiniSpeakerWave className="text-white" />
      
        <input

          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full range h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer" 
        
        />
      </div>
    </div>
  </div>
  );
}

export default Speaker;
