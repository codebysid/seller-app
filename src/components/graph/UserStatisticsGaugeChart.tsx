import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import LegendGauge from "./LegendGauge";
import Icons from "../Icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

interface ChartDataItem {
  name: string;
  value: number;
}

const UserStatsGauge = () => {
  const { selectedCountry, theme } = useSelector((state: RootState) => state);

  const [chartData, setChartData] = useState<ChartDataItem[]>();
  const { registeredUserData } = selectedCountry;
  useEffect(() => {
    setChartData([
      { name: "Premium", value: registeredUserData.premiumUsers },
      { name: "Basic", value: registeredUserData?.basicUsers },
    ]);
  }, [selectedCountry, registeredUserData]);

  return (
    <div className="relative h-[280px]">
      <ResponsiveContainer width="100%">
        <PieChart>
          <Pie
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius="70%"
            outerRadius="90%"
            dataKey="value"
          >
            <Cell className=" fill-blue" />
            <Cell className=" fill-blue/60" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
        {theme.dark ? (
          <Icons name="userGaugeDarkIcon" />
        ) : (
          <Icons name="userGaugeLightIcon" />
        )}
        <div className=" text-head-xl font-bold">
          {registeredUserData?.totalUsers?.toLocaleString()}
        </div>
        <div className=" text-body-text text-textColor/60">Total users</div>
      </div>

      <div className="flex justify-between w-full px-4 absolute bottom-0">
        <LegendGauge
          value={registeredUserData?.premiumUsers}
          label="Premium Users"
          direction="left"
        />
        <LegendGauge
          value={registeredUserData?.basicUsers}
          label="Basic Users"
          direction="right"
        />
      </div>
    </div>
  );
};

export default UserStatsGauge;
