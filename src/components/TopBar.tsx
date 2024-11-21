import CountryDropDown from "./CountryDropDown";
import ProfilePicture from "./ProfilePicture";

const TopBar = () => {
  return (
    <div className="h-[64px] border-b border-black-16 flex flex-row justify-between pl-60 pr-10 items-center">
      <h1 className=" text-head-l text-black">Dashboard</h1>
      <div className=" flex flex-row items-center gap-10">
        <CountryDropDown />
        <ProfilePicture />
      </div>
    </div>
  );
};

export default TopBar;
