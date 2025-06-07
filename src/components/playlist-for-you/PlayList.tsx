import React from "react";
import PlayListItem from "./PlayListItem";
import axios from "axios";
import { useQuery } from "react-query";
import { usePlayerContext } from "../../context/PlayerContext";
import Loading from "../common/Loading";
import { AlbumType } from "../interface/interface";

function PlayList() {
  //fetch all playlist
  const fetchData = async () => {
    const response = await axios.get(
      "https://musicplayer-backend-fduc.onrender.com/api/v1/playlist-for-you"
    );
    //return playlist
    // console.log(re)
    return response.data.playlist;
  };

  const { data, error, isLoading } = useQuery<AlbumType[]>(
    "retriveData",
    fetchData //query function
  );
  if (!data) {
    return <h1>data is undefined</h1>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const playerContext = usePlayerContext();

  if (!playerContext) {
    return null;
  }


  const { setAlbum, setCurrentIndex ,setTime,audioref} = playerContext;
  const handleSelectedItem = (album: AlbumType) => {
    if (audioref.current) {
      // audioref.current.pause(); 
      audioref.current.currentTime = 0; 
    }
    const currentIndex = data.findIndex((item) => item.id == album.id);
    setAlbum(album);
    // console.log('selectedalbum',album)
    
    setCurrentIndex(currentIndex);
    setTime({
      currentTime: {
        min:0,
        sec:0 
      },
      totalTime: {
        min:0,
        sec:0 
  }})
  };
  const fillColor = (id: string) => {
    // console.log('object:',id)
    switch (id) {
      case "1":
        return "fill-[#fd9c02]";
      case "2":
        return "#DC225A";
      case "3":
        return "#234EFF";
      case "4":
        return "#3BABD9";
      case "5":
        return "#DC225A";
      default:
        return " #000";
    }
  };
  const bgImage = (id: string) => {
    switch (id) {
      case "1":
        return "bg-img1" ;
      case "2":
        return "bg-img2";
      case "3":
        return "bg-img3";
      case "4":
        return "bg-img4";
      case "5":
        return "bg-img2";
      default:
        return " ";
    }
  };
  if (isLoading) return <Loading />;
  if (error) return <div>Error: {(error as Error).message}</div>;
  return (
    <div className="p-5 relative  fil">
      <h1 className="font-bold tracking-wider text-xl">PlayList For You</h1>
      <div className="flex gap-3 pt-7 w-[95%] overflow-scroll overflow-y-hidden hidescrollbar">
        {data &&
          data.map((album) => (
            <PlayListItem
              onClick={() => {
                handleSelectedItem(album);
              }}
              key={album.id}
              album={album}
              bg={bgImage(album.id)}
              fill={fillColor(album.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default PlayList;
