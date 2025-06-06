// import React from "react";
// import { usePlayerContext } from "../../context/PlayerContext";
import img1 from "../../assets/photo_12_2024-06-23_19-14-51.jpg";

interface Album{
  album:{
  poster_url:string;
  albumtitle:string;
  mix:string
  }
}

function PlayerDetails({album}:Album) {

  return (
    <>
      {album == undefined ? (
        <></>
      ) : (
        <div className="flex gap-3 py-3 items-center">
          <div className="pl-2">
            <img
              src={album.poster_url || img1}
              alt=""
              className="w-14 h-14 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col">
            <a href="" className="truncate ... ">
              {" "}
              {album.albumtitle || "Chill future"}
            </a>
            <a href="" className="text-sm text-[#9CA3AF] hover:underline">
              {album.mix || "this collection"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default PlayerDetails;
