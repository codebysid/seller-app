import { useDispatch, useSelector } from "react-redux";
import { navItems } from "../lib/constants";
import DarkModeSwitch from "./DarkModeSwitch";
import Icons from "./Icons";
import NavCategory from "./NavCategory";
import { updateCompactMode } from "../redux/slice/compactMode";
import { RootState } from "../redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isCompactMode } = useSelector(
    (state: RootState) => state.isCompactMode
  );
  const handleCompactMode = () => dispatch(updateCompactMode());

  return (
    <div
      className={` transition-all duration-500 min-h-screen border-r border-borderColor py-4 w-max ${
        isCompactMode ? `px-1` : `px-5`
      }`}
    >
      <div
        className={` flex flex-row items-center ${
          isCompactMode ? ` gap-0 p-0 pb-5` : `gap-4 pb-5 pl-2`
        }`}
      >
        {!isCompactMode ? (
          <Icons name="appLogo" />
        ) : (
          <Icons name="appLogoCompact" />
        )}
        <span onClick={handleCompactMode}>
          {isCompactMode ? (
            <Icons name="rightArrowIconBox" />
          ) : (
            <Icons name="leftArrowIconBox" />
          )}
        </span>
      </div>
      <NavCategory items={navItems[0].items} />
      <NavCategory items={navItems[1].items} />
      <NavCategory items={navItems[2].items} />
      <NavCategory items={navItems[3].items} />
      <DarkModeSwitch />
    </div>
  );
};

export default Navbar;
