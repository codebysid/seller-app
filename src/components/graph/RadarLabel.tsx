import { LabelProps } from "recharts";

const Label = ({ cx, cy, x, y, value, angle }: LabelProps) => {
  if (!cx || !cy || !x || !y || !angle) return;
  const radius = 120;
  const labelX = Number(cx) + radius * Math.cos((-angle * Math.PI) / 180);
  const labelY = Number(cy) + radius * Math.sin((-angle * Math.PI) / 180);
  return (
    <text
      x={labelX + 10}
      y={labelY + 15}
      fontSize={20}
      fontWeight={700}
      className="stroke-none fill-textColor"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {value}
    </text>
  );
};

export default Label;
