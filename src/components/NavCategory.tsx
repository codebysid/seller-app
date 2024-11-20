import { NavItemType } from "../lib/constants";
import NavItem from "./NavItem";

interface INavCategory {
  items: NavItemType[];
}
const NavCategory = ({ items }: INavCategory) => {
  return (
    <div className=" flex flex-col gap-2">
      {items.map((navItem) => {
        return (
          <NavItem
            key={navItem.id}
            title={navItem.title}
            id={navItem.id}
            route={navItem.route}
            icon={navItem.icon}
          />
        );
      })}
      <hr className="h-[1px] bg-black-16 text-black-16" />
    </div>
  );
};

export default NavCategory;
