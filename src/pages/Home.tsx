import React from 'react'
import { usePlayerContext } from '../context/PlayerContext';
import ProfileMenu from '../components/ProfileMenu';
import Header from './Header';
import MenuBar from '../components/common/MenuBar';
import Player from '../components/player/Player';
import MusicHub from './MusicHub';

function Home() {
    const playerContext=usePlayerContext();
    if(!playerContext){return null}
    const {  state } = playerContext
  return (
    <>
       {state ? (
          <ProfileMenu />
        ) : (
          <>
            <Header />
            <div className="flex gap-4 ">
              <MenuBar className={`md:flex md:flex-col gap-y-10 hidden ml-4 w-[6%] bg-black  pt-6`}/>
             
              <MusicHub/>
              
            </div>
            <div className="fixed bottom-0 w-full">
              <Player />
              <MenuBar className={`flex  gap-y-10 lg:hidden md:hidden justify-around pt-6  pb-3 bg-black `}/>
            </div>
           
          </>
        )}
    </>
  )
}

export default Home
