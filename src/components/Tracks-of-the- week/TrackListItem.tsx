
import HeadSetIcon from '../icons/HeadSetIcon';
import HeartIcon from '../icons/HeartIcon';
import Play from '../icons/PlayIcon';
import { AlbumType } from '../interface/interface';

type TrackOfTheWeekProps = {
  album: AlbumType;
  onClick: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
};


function TrackListItem({album,onClick}:TrackOfTheWeekProps) {
  
  return (
    <>
      <div className="flex justify-between mx-7  gap-5 pt-5">
        <div className="flex gap-4">
          
          <img src={album.poster_url} alt="" className="w-12 h-12 rounded-md " />
          <div className=" max-w-[100px] md:max-w-md lg:ma-w-lg sm:max-w-sm">
            <p className=''>{album.track[0].title}</p>
            <p className='text-sm text-[#9CA3AF]'>{album.albumtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
         <HeadSetIcon/>
          
          <p className=''>{album.liked}k</p>
          </div>
          <div className="flex items-center gap-3 border rounded-full border-[#333333] pl-3 ">
           
            <HeartIcon  fill='#2BD268' />
           
            <div className="border border-white  rounded-full h-10 w-10 flex items-center justify-center">
            <Play onClick={onClick}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackListItem