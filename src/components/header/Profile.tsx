
import profile from '../../assets/photo_2024-06-24_10-29-20.jpg'
import { IoMdMenu } from 'react-icons/io';
import { usePlayerContext } from '../../context/PlayerContext';
import CheckMark from '../icons/CheckMark';
import FlagIcon from '../icons/FlagIcon';
import SettingIcon from '../icons/SettingIcon';
import Notification from '../icons/Notification';


function Profile() {
  const playerContext=usePlayerContext();
  if(!playerContext){return <h1>nnnnnnnnn</h1>;}
  const { ShowMenu } = playerContext

  return (
    <>
      <div className=" ">
        <div className="lg:hidden md:hidden block mx-3" onClick={ShowMenu}>
          <IoMdMenu size={50} />
        </div>

        <div className=" hidden md:flex gap-x-4 items-center  border w-[100%] rounded-full border-[#333333] bg-[#0D0D0D] pl-3">
          <CheckMark />
          <FlagIcon />
          <SettingIcon />
          <Notification />

          <img src={profile} alt="" className="rounded-full w-14 h-14" />
        </div>
      </div>
    </>
  );
}

export default Profile