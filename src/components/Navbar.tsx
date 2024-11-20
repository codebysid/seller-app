import { navItems } from "../lib/constants";
import DarkModeSwitch from "./DarkModeSwitch";
import Icons from "./Icons";
import NavCategory from "./NavCategory";

const Navbar = () => {
  return (
    <div className=" min-h-screen border-r border-black-16 py-4 px-5">
      <div className=" pb-5 pl-2 flex flex-row items-center gap-4">
        <Icons name="appLogo" />
        <Icons name="leftArrowIcon" />
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
