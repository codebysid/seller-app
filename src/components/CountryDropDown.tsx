import { ReactNode, useState } from "react";
import { countries } from "../lib/constants";
import Icons from "./Icons";

const CountryDropDown = () => {
  const [dropDownState, setDropDownState] = useState<{
    visible: boolean;
    selectedOption: { title: string; flag: ReactNode };
  }>({
    visible: false,
    selectedOption: { title: "", flag: "" },
  });

  const handleDropDownVisibility = () =>
    setDropDownState((prev) =>
      prev.visible
        ? { ...prev, visible: !prev.visible }
        : {
            visible: !prev.visible,
            selectedOption: dropDownState.selectedOption,
          }
    );

  const handleSelectedOption = (title: string, flag: ReactNode) => {
    setDropDownState((prev) =>
      prev
        ? { ...prev, selectedOption: { title, flag } }
        : {
            visible: dropDownState.visible,
            selectedOption: { title, flag },
          }
    );
    handleDropDownVisibility();
  };

  return (
    <div className=" w-[178px]">
      <div
        onClick={handleDropDownVisibility}
        className=" bg-black-16 flex flex-row items-center justify-between w-full h-[42px] rounded-full px-1 cursor-pointer"
      >
        <div className="flex flex-row items-center gap-2 z-30 ">
          {dropDownState.selectedOption.flag || <Icons name="usaFlag" />}
          <p>{dropDownState.selectedOption.title || "USA"}</p>
        </div>
        <Icons name="dropDownIcon" />
      </div>
      <div className="absolute top-13 left-[83.2%] z-20 bg-black-16">
        {dropDownState.visible &&
          countries.map((country) => {
            return (
              <div
                key={country.id}
                onClick={() =>
                  handleSelectedOption(country.title, country.flag)
                }
                className="cursor-pointer flex flex-row items-center w-[170px] p-2 hover:bg-white-60"
              >
                {country.flag}
                <p>{country.title}</p>
              </div>
            );
          })}
      </div>
      {dropDownState.visible && (
        <div
          className=" z-10 fixed left-0 top-0 h-screen w-screen cursor-pointer"
          onClick={handleDropDownVisibility}
        ></div>
      )}
    </div>
  );
};

export default CountryDropDown;
