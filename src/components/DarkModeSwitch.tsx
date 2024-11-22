import { useState } from "react";
import Icons from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTheme } from "../redux/slice/theme";
import { saveToLocalStorage } from "../lib/helper";

const DarkModeSwitch = () => {
  const { isCompactMode, theme } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleModeChange = () => {
    setIsChecked((prev) => !prev);
    dispatch(toggleTheme());
    saveToLocalStorage("darkMode", JSON.stringify({ dark: isChecked }));
  };

  return (
    <div className=" flex flex-row items-center gap-4 fixed bottom-4 w-max">
      {!isCompactMode.isCompactMode && (
        <p className=" text-body-text text-textColor/60">Dark</p>
      )}
      <label
        htmlFor="toggleObjective"
        className="flex items-center cursor-pointer select-none text-white"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggleObjective"
            className="peer sr-only"
            checked={!theme.dark}
            onChange={handleModeChange}
          />
          <div className="block h-[24px] w-[48px] rounded-full bg-blue"></div>
          <div className="absolute top-[5px] left-[7px] z-10 hidden peer-checked:inline">
            <Icons name="sunIcon" />
          </div>
          <div className="absolute right-[5px] top-[5px] z-10 peer-checked:hidden">
            <Icons name="moonIcon" />
          </div>
          <div className="absolute w-[20px] h-[20px] transition-all bg-[#ffffff] rounded-full top-[2px] left-[2px] peer-checked:left-[26px] "></div>
        </div>
      </label>
      {!isCompactMode.isCompactMode && (
        <p className=" text-body-text text-textColor/60">Light</p>
      )}
    </div>
  );
};

export default DarkModeSwitch;
