import SalesOverviewChart from "./SalesOverviewChart";

const SalesOverview = () => {
  return (
    <div className=" bg-background border border-borderColor rounded-lg p-4 lg:ml-14">
      <h1 className=" text-head-s text-left">Sales Overview</h1>
      <SalesOverviewChart />
    </div>
  );
};

export default SalesOverview;
