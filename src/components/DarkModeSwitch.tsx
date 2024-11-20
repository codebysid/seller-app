import { useState } from "react";
import Icons from "./Icons";

const DarkModeSwitch = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleModeChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className=" flex flex-row items-center gap-4 fixed bottom-4">
      <p className=" text-body-text text-black-60">Dark</p>
      <label
        htmlFor="toggleObjective"
        className="flex items-center cursor-pointer select-none text-white"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggleObjective"
            className="peer sr-only"
            checked={isChecked}
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
      <p className=" text-body-text text-black-60">Light</p>
    </div>
  );
};

export default DarkModeSwitch;
