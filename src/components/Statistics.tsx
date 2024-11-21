import { getStatOfCountry } from "../lib/helper";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import StatCard from "./StatCard";

const Statistics = () => {
  const selectedCountry = useSelector(
    (state: RootState) => state.selectedCountry
  );
  const stats = getStatOfCountry(selectedCountry.title);
  console.log(stats);
  return (
    <div className=" flex flex-row gap-10 pl-14 pt-16">
      {stats.map((stat, key) => {
        return (
          <StatCard
            key={key}
            title={stat.title}
            value={stat.value}
            lastMonthChange={stat.lastMonthChange}
          />
        );
      })}
    </div>
  );
};

export default Statistics;
