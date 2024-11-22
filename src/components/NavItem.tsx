import { useLocation, useNavigate } from "react-router-dom";
import { NavItemType } from "../lib/constants";
import { useEffect } from "react";

const NavItem = ({ title, icon, id, route }: NavItemType) => {
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
     rounded-md py-1 px-3 ${
       pathname.includes(title.toLocaleLowerCase().trim()) &&
       `text-blue bg-blue-20`
     }`}
    >
      {icon}
      <span className=" text-head-s">{title}</span>
    </div>
  );
};

export default NavItem;
