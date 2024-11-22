import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import StatCard from "./StatCard";

const Statistics = () => {
  const { stats } = useSelector((state: RootState) => state.selectedCountry);
  return (
    <div className=" flex flex-row justify-evenly">
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
