import { NavItemType } from "../lib/constants";
import NavItem from "./NavItem";

interface INavCategory {
  items: NavItemType[];
}
const NavCategory = ({ items }: INavCategory) => {
  return (
    <div className="flex flex-col gap-2 w-max border-b border-textColor/20 py-4">
      {items.map((navItem) => {
        return (
          <NavItem
            key={navItem.id}
            title={navItem.title}
            route={navItem.route}
            icon={navItem.icon}
          />
        );
      })}
    </div>
  );
};

export default NavCategory;
