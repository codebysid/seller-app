import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { convertToDollar, getDataOfCountry } from "../../lib/helper";
import TooltipContent from "./ToolTipContent";
import LegendContent from "./LegendContent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SalesOverviewChart = () => {
  const { title } = useSelector((state: RootState) => state.selectedCountry);
  const data = getDataOfCountry(title);
  return (
    <ResponsiveContainer width="100%" height={280}>
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

        <Legend
          content={<LegendContent />}
          verticalAlign="top"
          align="right"
          wrapperStyle={{
            display: "flex",
            justifyContent: "end",
            paddingBottom: "40px",
          }}
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
