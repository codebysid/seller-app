import SalesOverviewChart from "./SalesOverviewChart";

const SalesOverview = () => {
  return (
    <div className=" bg-white border border-black-16 rounded-lg p-4 ml-14">
      <h1 className=" text-head-s text-left">Sales Overview</h1>
      <SalesOverviewChart />
    </div>
  );
};

export default SalesOverview;
