import { useLocation, useNavigate } from "react-router-dom";
import { NavItemType } from "../lib/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const NavItem = ({ title, icon, id, route }: NavItemType) => {
  const { isCompactMode } = useSelector(
    (state: RootState) => state.isCompactMode
  );
  const router = useNavigate();
  const { pathname } = useLocation();

  const handleNavRoute = () => router(route);

  useEffect(() => {
    if (pathname == "/") router("/dashboard");
  }, [pathname]);

  return (
    <div
      onClick={handleNavRoute}
      className={` transition-all duration-150 cursor-pointer group flex flex-row items-center gap-4 text-textColor/60 hover:text-textColor
     rounded-md ${isCompactMode ? "p-2 ml-2" : "py-1 px-3"} w-max ${
        pathname.includes(title.toLocaleLowerCase().trim()) &&
        `text-blue/100 bg-blue/20`
      }`}
    >
      {icon}
      {!isCompactMode && <span className=" text-head-s">{title}</span>}
    </div>
  );
};

export default NavItem;
