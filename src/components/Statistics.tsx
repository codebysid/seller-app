import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import StatCard from "./StatCard";

const Statistics = () => {
  const { stats } = useSelector((state: RootState) => state.selectedCountry);
  console.log({ stats });
  return (
    <div className=" flex flex-row justify-evenly py-14">
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
