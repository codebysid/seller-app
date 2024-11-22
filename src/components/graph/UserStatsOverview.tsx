import UserStatsGauge from "./UserStatisticsGaugeChart";

const UserStatsOverview = () => {
  return (
    <div className="bg-background border border-borderColor rounded-lg p-4 ml-14 h-full">
      <h1 className=" text-head-s">Registered Users</h1>
      <UserStatsGauge />
    </div>
  );
};

export default UserStatsOverview;
