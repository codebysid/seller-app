import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import StatCard from "./StatCard";
import { convertToDollar, convertToPercentage } from "../lib/helper";

const Statistics = () => {
  const { stats } = useSelector((state: RootState) => state.selectedCountry);

  return (
    <div className=" flex flex-col gap-4 lg:gap-0 lg:flex-row justify-evenly">
      {stats.map((stat, key) => {
        let updatedValue;
        const lowerCaseTitle = stat.title.toLowerCase().trim();
        if (lowerCaseTitle.includes("conversion")) {
          updatedValue = convertToPercentage(Number(stat.value), 100);
        }
        if (
          lowerCaseTitle.includes("profit") ||
          lowerCaseTitle.includes("income")
        ) {
          updatedValue = convertToDollar(Number(stat.value));
        }
        return (
          <StatCard
            key={key}
            title={stat.title}
            value={updatedValue ? updatedValue : stat.value}
            lastMonthChange={stat.lastMonthChange}
          />
        );
      })}
    </div>
  );
};

export default Statistics;
