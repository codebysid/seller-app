interface LegendItemProps {
  value: number;
  label: string;
  direction: "right" | "left";
}

const LegendGauge = ({ value, label, direction }: LegendItemProps) => {
  return (
    <div className="flex items-center">
      <div className="rounded-full" />
      <div
        className={`relative text-body-text-bold after:absolute after:w-[4px] after:h-6  after:top-2 rounded-full ${
          direction === "right" && ` after:-right-2 text-right after:bg-blue/60`
        }
        ${direction === "left" && ` after:-left-2 after:bg-blue`}
        `}
      >
        <div>{value?.toLocaleString()}</div>
        <div className=" text-body-text text-textColor/60">{label}</div>
      </div>
    </div>
  );
};

export default LegendGauge;
