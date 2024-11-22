import SalesRegionChart from "./SalesRegionChart";

const SalesRegion = () => {
  return (
    <div className=" flex flex-col justify-around h-full bg-background border border-borderColor rounded-lg pl-4 pt-2">
      <h1 className=" text-head-s text-left">Sales by Region</h1>
      <SalesRegionChart />
    </div>
  );
};

export default SalesRegion;
