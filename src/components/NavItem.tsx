import { useLocation, useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface INavItem {
  title: string;
  icon: ReactNode;
  route: string;
}

const NavItem = ({ title, icon, route }: INavItem) => {
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
      className={` transition-all duration-150 cursor-pointer group flex flex-row items-center gap-4 hover:text-textColor
     rounded-md ${isCompactMode ? "p-2 ml-2" : "py-1 px-3"} w-max ${
        pathname.includes(title.toLowerCase())
          ? ` bg-blue/20 text-blue`
          : `text-textColor/60`
      }`}
    >
      {icon}
      {!isCompactMode && <span className=" text-head-s">{title}</span>}
    </div>
  );
};

export default NavItem;
