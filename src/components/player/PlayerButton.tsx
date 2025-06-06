
import { IoPlaySkipBack, IoPlaySkipForwardSharp } from 'react-icons/io5'
import { IoIosPause, IoMdPlay } from 'react-icons/io'


interface PlayerButtonInterface {
  isPlaying:boolean
  nextTrack:()=>void
  handlePlayPause:()=>void
  prevTrack:()=>void
}

function PlayerButton({isPlaying,nextTrack, handlePlayPause,prevTrack}:PlayerButtonInterface) {
  
  return (
    <div>
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="">
          <IoPlaySkipBack size={20} onClick={prevTrack} />
        </div>
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
          {isPlaying ? (
            <span onClick={handlePlayPause}>
            <IoIosPause color="black" size={19} />
          </span>
           
          ) : (
            <span onClick={handlePlayPause}>
            <IoMdPlay color="black" size={19} />
          </span>
          )}
        </div>
        <div className="">
          <IoPlaySkipForwardSharp
            size={20}
            onClick={
            nextTrack
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerButton
