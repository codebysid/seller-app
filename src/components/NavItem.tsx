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
      className={`cursor-pointer group flex flex-row items-center gap-4 text-black-60 hover:text-black
     rounded-md  ${isCompactMode ? "p-2 ml-1" : "py-1 px-3"} w-max ${
        pathname.includes(title.toLocaleLowerCase().trim()) &&
        `text-blue bg-blue-20`
      }`}
    >
      {icon}
      {!isCompactMode && <span className=" text-head-s">{title}</span>}
    </div>
  );
};

export default NavItem;
