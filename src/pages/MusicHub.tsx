
import PlayList from "../components/playlist-for-you/PlayList";
import MostListened from "../components/most-listen-music/MostListened";
import Tracks from "../components/Tracks-of-the- week/Tracks";
import {  usePlayerContext } from "../context/PlayerContext";


function MusicHub() {
  const playerContext=usePlayerContext()
  if(!playerContext){return null}
  const{album}=playerContext
  return (
    <>
      <div className="w-[93%]">
        <PlayList />
        {album == undefined ?
        <div className=" lg:flex gap-8    ">
         
        <MostListened />
        <Tracks />
      </div>
        :
        <div className=" lg:flex gap-8  md:overflow-scroll md:overflow-x-hidden hidescrollbar md:h-[205px]  ">
        <MostListened />
        <Tracks />
       </div>
         }
          
        
      </div>
    </>
  );
}

export default MusicHub;
