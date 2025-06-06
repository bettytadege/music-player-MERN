import { useState } from "react";
import HomeIcon from "../icons/HomeIcon";
import CompassIcon from "../icons/CompassIcon";
import Speaker from "../icons/Speaker";
import LibraryIcon from "../icons/LibraryIcon";
import HeartIcon from "../icons/HeartIcon";

function MenuBar({ className }: { className: string }) {
  const [active, setActive] = useState<string | null>(null);
  const handleClick = (icon: string) => {
    setActive(icon);
  };
  return (
    <>
      <div className="">
      
        <div className={className}>
          <HomeIcon
            onClick={() => handleClick("home")}
            className={`${active === "home" ? "fill-white" : "fill-[#333333]"}`}
          />
          <CompassIcon
            className={`${
              active === "compass" ? "fill-white" : "fill-[#333333]"
            }`}
            onClick={() => handleClick("compass")}
          />
          <Speaker
            className={`${active === "mic" ? "fill-white" : "fill-[#333333]"}`}
            onClick={() => handleClick("mic")}
          />
          <LibraryIcon
            className={`${
              active === "library" ? "fill-white" : "fill-[#333333]"
            }`}
            onClick={() => handleClick("library")}
          />
          <HeartIcon
            className={`${
              active === "heart" ? "fill-white" : "fill-[#333333]"
            }`}
            onClick={() => handleClick("heart")}
          />
        </div>
      </div>
    </>
  );
}

export default MenuBar;
