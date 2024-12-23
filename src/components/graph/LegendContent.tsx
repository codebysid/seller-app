import { LegendProps } from "recharts";

const LegendContent = ({ payload }: LegendProps) => {
  if (!payload) return;

  return (
    <ul className="flex space-x-4">
      {payload &&
        payload.map((entry, index) => {
          return (
            <li key={`item-${index}`} className="flex items-center">
              <div
                className="w-[6px] h-[6px] rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-textColor/60 text-body-text">
                {entry.value}
              </span>
              {/* <span>{totalRevenue}</span> */}
            </li>
          );
        })}
    </ul>
  );
};

export default LegendContent;
