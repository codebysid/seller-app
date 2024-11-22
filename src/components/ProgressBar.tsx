import React from "react";
import { convertToPercentage } from "../lib/helper";

interface ProgressBarProps {
  value: string;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  return (
    <div
      className=" w-[128px] h-[6px] rounded-full bg-blue/20"
      role="progressbar"
      aria-valuenow={Number(value)}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className={`h-full rounded-full bg-blue`}
        style={{ width: convertToPercentage(Number(value), 100) }}
      ></div>
    </div>
  );
};

export default ProgressBar;
