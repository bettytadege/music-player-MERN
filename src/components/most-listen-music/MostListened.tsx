/* eslint-disable @typescript-eslint/no-explicit-any */

// import  { useState } from "react";
import img1 from "../../assets/photo_5_2024-06-23_19-14-50.jpg";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../common/Loading";
import { AlbumType } from "../interface/interface";
// import {  QueryError } from "mysql2";



function MostListened() {
  // const [count, setCount] = useState(0);

  
  const fetchData = async () => {
    const response = await axios.get(
      "https://musicplayer-backend-fduc.onrender.com/api/v1/most-listened"
    );
    return response.data.listened;
  };

  //fetch data
  const { data, error, isLoading } = useQuery<AlbumType[]>("data", fetchData);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {(error as Error).message}</div>;
  if(!data){return null}
  // console.log('from most listened',data)

 //count most listened
  const countMostListened = async (id:string) => {
   
const track = data.find((song:any) => song._id === id);
    console.log(track)
    if (track) {
      const countMostListenedSong = track.listened + 1; 
      // setCount(countMostListenedSong); 
       
      console.log('counted',countMostListenedSong)
      try {
        await axios.put(`https://musicplayer-backend-fduc.onrender.com/api/v1/most-listened/${id}`, {
          listened: countMostListenedSong,
        });
        
      } catch (error) {
        console.error( error);
      }
    }
  };


  

  return (
    <>
      <div className="w-full">
        <h1 className="pb-4 font-bold">What You Listen to the most</h1>
        <div className="py-4 bg-[#0D0D0D] lg:w-[100%] md:w-[65%] w-[90%] border border-[#333333] md:rounded-3xl">
          <div
            className="flex gap-2 overflow-scroll overflow-y-hidden hidescrollbar md:gap-3 lg:overflow-scroll lg:overflow-x-hidden scrollbarhide lg:h-[232px]"
          >
            <div className="flex-shrink-0 pl-4">
              <img src={img1} alt="" className="w-20 md:w-48 md:h-52" />
            </div>

            <div className="flex gap-3 md:grid grid-cols-3">
              {data.map((album) => (
                <img
                  key={album.id}
                  src={album.poster_url}
                  alt=""
                  className="lg:w-20 md:w-24 w-20 cursor-pointer"
                  onClick={() => countMostListened(album.id)} 
                />
              ))}
            </div>
            <div className="rotate-text text-[#859DFF] "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MostListened;

