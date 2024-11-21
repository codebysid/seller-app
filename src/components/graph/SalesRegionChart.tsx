import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import Label from "./RadarLabel";

const data = [
  {
    region: "Asia",
    value: 2201,
  },
  {
    region: "Europe",
    value: 2865,
  },
  {
    region: "Pacific",
    value: 2475,
  },
  {
    region: "Americans",
    value: 1762,
  },
  {
    region: "Middle Est",
    value: 1749,
  },
  {
    region: "Africa",
    value: 1591,
  },
];

const SalesRegionChart: React.FC = () => {
  return (
    <ResponsiveContainer
      width="85%"
      height={280}
      className={" flex justify-center items-center"}
    >
      <RadarChart data={data}>
        <PolarGrid className=" fill-blue-8" />
        <PolarAngleAxis dataKey="region" className=" text-sbody-text" />
        <PolarRadiusAxis />
        <Radar
          dataKey="value"
          dot={{ r: 5, className: "fill-blue border-white" }}
          className=" fill-blue-32 stroke-blue stroke-[1px]"
          label={<Label />}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SalesRegionChart;
