import React from "react";
import { FaPlay } from "react-icons/fa";
import { AlbumType} from "../interface/interface";
// import Play from "../icons/PlayIcon";
type PlayListItemType={
  album:AlbumType
  bg:string
  fill:string;
  onClick: React.MouseEventHandler<HTMLDivElement>
}
function PlayListItem({ album, bg,fill,onClick}:PlayListItemType) {
  return (
    <>
      <div className="relative " onClick={onClick}>
        <div className="relative md:w-[260px] md:h-[240px]  h-[200px] w-[220px]">
          <img
            src={album.poster_url}
            alt=""
            className="object-cover object-left-top w-full h-full rounded-3xl"
          />

          <div className={`absolute inset-0 rounded-3xl ${bg}`}></div>
        </div>
        <div className="pl-4 relative md:-top-[14.7rem] text-white pt-3">
          <p className="mb-4 font-semibold">{album.track.length}  Tracks</p>
        </div>
        <div className="flex items-center gap-6 md:mx-4 relative md:-top-28 mx-4 after:content">
          <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
            {/* <Play fill={fill}/> */}
            <FaPlay size={13} style={{fill:fill}}  />
          </div>
          <div>
            <p className="line-clamp-2 font-semibold">{album.albumtitle}</p>
            <span className="text-xs line-clamp-2 font-semibold ">{album.mix}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayListItem;
