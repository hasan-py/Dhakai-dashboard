import Message from "../../assets/messageIcon.svg";
import Notification from "../../assets/notificationIcon.svg";
import ProfilePicIcon from "../../assets/profilePicIcon.svg";
import Search from "../../assets/search.svg";

const NavberIcon = ({
  img,
  name,
  notification,
}: {
  img: any;
  name?: string;
  notification?: number;
}) => {
  return (
    <div className="relative">
      {notification && (
        <div className="absolute -top-1 -right-1 bg-[#ac0000] text-white-50 rounded-full h-[18px] w-[18px] flex items-center justify-center text-[12px] font-bold">
          {notification}
        </div>
      )}

      <img
        className="w-[42px] h[42px] cursor-pointer rounded-full ml-4"
        src={img}
        alt={name || "icon"}
      />
    </div>
  );
};

export default function Navber() {
  return (
    <>
      <div className="w-full flex justify-between h-[80px] bg-[#01896a] drop-shadow-sm px-6 py-4">
        <div className="flex bg-green-950 p-1 rounded-full custom-shadow-inner">
          <button className="text-[14px] font-bold text-white-0 bg-green-900 px-4 rounded-full">
            Explore
          </button>
          <button className="text-[14px] font-bold text-white-0 px-4 rounded-full">
            Activity
          </button>
        </div>
        <div className="hidden md:flex bg-white-0 w-2/5 md:items-center rounded-full px-4">
          <img className="mr-2" src={Search} alt="search" />
          <input
            className="placeholder-[#9797a0] w-full focus:outline-none text-[#9797a0]"
            placeholder="Search by name, group, type and others"
          />
        </div>
        <div className="hidden md:flex md:items-center">
          <NavberIcon notification={2} img={Message} />
          <NavberIcon notification={6} img={Notification} />
          <img
            className="w-[80px] h-[70px] cursor-pointer rounded-full mt-1"
            src={ProfilePicIcon}
            alt={"ProfilePicIcon"}
          />
        </div>
      </div>
    </>
  );
}
