import { useState } from 'react';
import HomeIcon from '../icons/HomeIcon';
import CompassIcon from '../icons/CompassIcon';
import Speaker from '../icons/Speaker';
import LibraryIcon from '../icons/LibraryIcon';
import HeartIcon from '../icons/HeartIcon';
import { useNavigate } from 'react-router-dom';

function LeftBar() {
  const [active, setActive] = useState<string>('home');
  const navigate = useNavigate();

  const handleClick = (icon: string) => {
    setActive(icon);
  };

  return (
    <div className="bg-black w-[6%] pt-6">
      <div className="md:flex md:flex-col gap-y-10 hidden ml-4">
        <HomeIcon
          onClick={() => {
            setActive('home');
            navigate('/');
          }}
          className={`${active === 'home' ? 'fill-white' : 'fill-[#333333]'}`}
        />
        <CompassIcon
          onClick={() => handleClick('compass')}
          className={`${active === 'compass' ? 'fill-white' : 'fill-[#333333]'}`}
        />
        <Speaker
          onClick={() => handleClick('mic')}
          className={`${active === 'mic' ? 'fill-white' : 'fill-[#333333]'}`}
        />
        <LibraryIcon
          onClick={() => handleClick('library')}
          className={`${active === 'library' ? 'fill-white' : 'fill-[#333333]'}`}
        />
        <HeartIcon
          onClick={() => handleClick('heart')}
          className={`${active === 'heart' ? 'fill-white' : 'fill-[#333333]'}`}
        />
      </div>
    </div>
  );
}

export default LeftBar;
