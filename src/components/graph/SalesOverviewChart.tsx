import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { convertToDollar } from "../../lib/helper";
import TooltipContent from "./ToolTipContent";
import LegendContent from "./LegendContent";

const data = [
  { month: "Apr 2023", revenue: 15000, target: 18000 },
  { month: "May 2023", revenue: 17000, target: 20000 },
  { month: "Jun 2023", revenue: 16000, target: 21000 },
  { month: "Jul 2023", revenue: 18000, target: 19000 },
  { month: "Aug 2023", revenue: 17000, target: 18000 },
  { month: "Sep 2023", revenue: 14000, target: 20000 },
  { month: "Oct 2023", revenue: 15000, target: 22000 },
  { month: "Nov 2023", revenue: 15780, target: 20000 },
  { month: "Dec 2023", revenue: 17000, target: 18000 },
  { month: "Jan 2024", revenue: 19000, target: 22000 },
];

const SalesOverviewChart = () => {
  return (
    <ResponsiveContainer width="80%" height={500}>
      <LineChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={false}
          verticalFill={[
            "rgba(105, 111, 251, 0.12)",
            "rgba(105, 111, 251, 0.04)",
          ]}
        />

        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis
          tickFormatter={(value) =>
            `${value > 1 ? convertToDollar(value / 1000) + `k` : ""}`
          }
          tickLine={false}
          axisLine={false}
          orientation="right"
        />
        <Tooltip content={<TooltipContent />} />

        {/* Legend */}
        <Legend
          content={<LegendContent />}
          verticalAlign="top"
          align="right"
          // wrapperStyle={{ paddingBottom: 10 }}
        />

        <Line
          type="monotone"
          dataKey="revenue"
          stroke="rgba(105, 111, 251)"
          strokeWidth={2.5}
          dot={false}
          name="Total Revenue"
        />
        <Line
          type="monotone"
          dataKey="target"
          stroke="rgba(255, 158, 43)"
          strokeWidth={2.5}
          dot={false}
          name="Total Target"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default SalesOverviewChart;
