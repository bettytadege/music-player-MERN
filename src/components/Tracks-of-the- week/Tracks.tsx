
import TrackListItem from "./TrackListItem";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../common/Loading";
import { usePlayerContext } from "../../context/PlayerContext";
import { AlbumType } from "../interface/interface";

const Tracks = () => {
  const playerContext = usePlayerContext();
  if (!playerContext) {
    return null;
  }
  const { setAlbum, audioref,setCurrentIndex } = playerContext;

  const fetchData = async () => {
    const res = await axios.get(
      `https://musicplayer-backend-fduc.onrender.com/api/v1/track-of-the-week`
    );
    return res.data.albums;
  };
  const { data, error, isLoading } = useQuery<AlbumType[]>("likedsong", fetchData);


  const selectedAlbum = (album: AlbumType) => {
    setAlbum(album);
    setCurrentIndex(0);
    if (audioref.current) {
    // audioref.current.pause(); 
    audioref.current.currentTime = 0; 
  }
  };
  // if (audioref.current) {
  //   // audioref.current.pause(); 
  //   audioref.current.currentTime = 0; 
  // }
  if (isLoading) return <Loading />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <>
      <div className=" w-full">
        <div className="pb-4">
          <h1 className="font-bold">Tracks of the Week</h1>
        </div>
        <div className="pt-4 bg-[#0D0D0D] w-[90%] lg:w-[100%] md:w-[70%] border border-[#333333]   rounded-xl  h-fit">
          <div className="overflow-scroll overflow-x-hidden hidescrollbar h-[250px]">
            {data && data.map((album) => (
              // console.log(song.track[0].title),
              <TrackListItem
                onClick={() => selectedAlbum(album)}
                key={album.id}
                album={album}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracks;
