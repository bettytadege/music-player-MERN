/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useRef, useState } from "react";
import { AlbumType } from "../components/interface/interface";
const initialState: boolean = false;

interface Time {
  min: number;
  sec: number;
}

interface playerState {
  time: {
    currentTime: Time;
    totalTime: Time;
  };
  setTime: (time: { currentTime: Time; totalTime: Time }) => void;
  ShowMenu: () => void;
  handlePlayPause: () => void;
  CancelMenu: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  audioref: React.MutableRefObject<HTMLAudioElement | null>;
  seekbar: React.MutableRefObject<HTMLInputElement | null>;
  seekbg: React.MutableRefObject<HTMLInputElement | null>;
  isPlaying: boolean;
  state: boolean;
  album: any | undefined;
  setAlbum: (album: any) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

interface Action {
  type: "CANCEL" | "SHOW";
}

export const PlayerContext = createContext<playerState | null>(null);

export function PlayerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) 
{
  const audioref = useRef<HTMLAudioElement | null>(null);
  const seekbar = useRef<HTMLInputElement | null>(null);
  const seekbg = useRef<HTMLInputElement | null>(null);
  const [album, setAlbum] = useState<AlbumType | null>(null);

  const [isPlaying, setIsPlay] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [time, setTime] = useState({
    currentTime: {
      min: 0,
      sec: 0,
    },
    totalTime: {
      min: 0,
      sec: 0,
    },
  });

  const nextTrack = () => {
    console.log("next", currentIndex);
    console.log(album);
    // console.log(album.track.length)
    //     if (album && currentIndex < album.track.length - 1)
    //       setCurrentIndex(currentIndex + 1);
  };
  const prevTrack = () => {
    console.log("prevkk");
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handlePlayPause = () => {
    if (audioref.current) {
      if (isPlaying) {
        audioref.current.pause();
        setIsPlay(false);
        //   console.log('object')
      } else {
        audioref.current.play();
        setIsPlay(true);
      }
    }
  };

  const reducer = (state: boolean, action: Action): boolean => {
    // console.log(state)

    if (action.type === "CANCEL" || action.type === "SHOW") {
      return !state;
    }
    return state;
  };

  const [state, dispatchAction] = useReducer(reducer, initialState);
  // console.log(state)
  const ShowMenu = () => {
    dispatchAction({ type: "SHOW" });
  };
  const CancelMenu = () => {
    dispatchAction({ type: "CANCEL" });
    //   console.log('object')
  };
  const values: playerState = {
    state,
    handlePlayPause,
    nextTrack,
    prevTrack,
    audioref,
    seekbg,
    seekbar,
    isPlaying,

    album,
    setAlbum,
    time,
    setTime,

    ShowMenu,
    CancelMenu,
    setCurrentIndex,
    currentIndex,
  };
  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
}
export const usePlayerContext = () => {
  return useContext(PlayerContext);
};
