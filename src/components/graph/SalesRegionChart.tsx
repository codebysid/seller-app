import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import Label from "./RadarLabel";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SalesRegionChart: React.FC = () => {
  const { salesDataByRegion } = useSelector(
    (state: RootState) => state.selectedCountry
  );
  return (
    <ResponsiveContainer
      width="85%"
      height={280}
      className={" flex justify-center items-center"}
    >
      <RadarChart data={salesDataByRegion}>
        <PolarGrid className=" fill-blue opacity-5" />
        <PolarAngleAxis dataKey="region" className=" text-sbody-text" />
        <Radar
          dataKey="value"
          dot={{ r: 5, className: "fill-blue border-white" }}
          className=" fill-blue opacity-60 stroke-blue stroke-[1px]"
          label={<Label />}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SalesRegionChart;
