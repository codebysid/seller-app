import LastMonthChange from "./LastMonthChange";

interface IStatCard {
  title: string;
  value: string;
  lastMonthChange: string;
}

const StatCard = ({ title, value, lastMonthChange }: IStatCard) => {
  return (
    <div className="w-[80%] lg:w-[20%] flex flex-col items-start gap-4 bg-background border border-borderColor rounded-lg p-4">
      <p className=" text-head-s">{title}</p>
      <p className=" text-head-xl">{value}</p>
      <LastMonthChange
        value={lastMonthChange}
        style={lastMonthChange.includes("%") ? "positive" : "negative"}
      />
    </div>
  );
};

export default StatCard;
