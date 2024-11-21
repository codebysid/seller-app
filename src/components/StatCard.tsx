import { convertToDollar } from "../lib/helper";
import LastMonthChange from "./LastMonthChange";

interface IStatCard {
  title: string;
  value: string;
  lastMonthChange: string;
}

const StatCard = ({ title, value, lastMonthChange }: IStatCard) => {
  return (
    <div className="w-[20%] flex flex-col items-start gap-4 bg-white border border-black-16 rounded-lg p-4">
      <p className=" text-head-s">{title}</p>
      <p className=" text-head-xl">
        {isNaN(Number(value)) ? value : convertToDollar(Number(value))}
      </p>
      <LastMonthChange
        value={lastMonthChange}
        style={lastMonthChange.includes("%") ? "positive" : "negative"}
      />
    </div>
  );
};

export default StatCard;
