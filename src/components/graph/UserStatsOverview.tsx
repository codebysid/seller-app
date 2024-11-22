import UserStatsGauge from "./UserStatisticsGaugeChart";

const UserStatsOverview = () => {
  return (
    <div className="bg-white border border-black-16 rounded-lg p-4 ml-14 h-full">
      <h1 className=" text-head-s">Registered Users</h1>
      <UserStatsGauge />
    </div>
  );
};

export default UserStatsOverview;
