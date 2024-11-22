import { useEffect, useState } from "react";
import { countries } from "../lib/constants";
import Icons, { IconName } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  updateSelectedCountry,
  updateSelectedCountryData,
} from "../redux/slice/selectedCountry";
import { filterCountry } from "../lib/helper";

const CountryDropDown = () => {
  const selectedCountry = useSelector(
    (state: RootState) => state.selectedCountry
  );
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropDownVisibility = () => setIsOpen((prev: boolean) => !prev);

  const handleSelectedOption = (title: string) => {
    dispatch(updateSelectedCountry({ title }));
    handleDropDownVisibility();
  };

  useEffect(() => {
    const selectedCountryData = filterCountry(selectedCountry.title);
    if (selectedCountry) {
      console.log({ selectedCountry });
      dispatch(
        updateSelectedCountryData({
          stats: selectedCountryData.stats,
          salesDataByRegion: selectedCountryData.salesDataByRegion,
          salesOverviewData: selectedCountryData.salesOverviewData,
          title: selectedCountry.title,
          registeredUserData: selectedCountryData.registeredUserData,
          integrations: selectedCountryData.integrations,
        })
      );
    }
  }, [selectedCountry, dispatch]);

  return (
    <div className=" w-[178px]">
      <div
        onClick={handleDropDownVisibility}
        className=" bg-black/10 flex flex-row items-center justify-between w-full h-[42px] rounded-full px-1 cursor-pointer"
      >
        <div className="flex flex-row items-center gap-2 z-30 ">
          {<Icons name={selectedCountry.title as IconName} />}
          <p>{selectedCountry.title.toUpperCase()}</p>
        </div>
        <Icons name="dropDownIcon" />
      </div>

      <div className="absolute lg:top-13 lg:left-[83.2%] z-50 bg-black/10">
        {isOpen &&
          countries.map((country) => {
            return (
              <div
                key={country.id}
                onClick={() => handleSelectedOption(country.title)}
                className="cursor-pointer flex flex-row items-center w-[170px] p-2 hover:bg-background/60"
              >
                {country.flag}
                <p>{country.title.toUpperCase()}</p>
              </div>
            );
          })}
      </div>
      {isOpen && (
        <div
          className=" z-10 fixed left-0 top-0 h-screen w-screen cursor-pointer"
          onClick={handleDropDownVisibility}
        ></div>
      )}
    </div>
  );
};

export default CountryDropDown;
