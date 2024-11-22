import { useSelector } from "react-redux";
import CountryDropDown from "./CountryDropDown";
import ProfilePicture from "./ProfilePicture";
import { RootState } from "../redux/store";

const TopBar = () => {
  const { isCompactMode } = useSelector(
    (state: RootState) => state.isCompactMode
  );
  return (
    <div
      className={`h-[64px] border-b border-borderColor flex flex-row justify-between ${
        isCompactMode ? `pl-20` : `pl-60`
      } pr-10 items-center bg-background`}
    >
      <h1 className=" text-head-l text-textColor">Dashboard</h1>
      <div className=" flex flex-row items-center gap-10">
        <CountryDropDown />
        <ProfilePicture />
      </div>
    </div>
  );
};

export default TopBar;
