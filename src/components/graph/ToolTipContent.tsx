import { TooltipProps } from "recharts";

const TooltipContent = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative bg-black text-white shadow-lg rounded-md w-[71px] h-[48px] flex flex-col justify-center items-start px-3 after:w-[14px] after:h-[14px] after:absolute after:-right-3 after:border-t-[5px] after:border-b-[5px] after:border-y-transparent after:border-l-[5px] after:border-l-black">
        <p className=" text-sbody-text">Revenue:</p>
        <p className=" text-sbody-text-bold">
          {payload[0].value && payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
};

export default TooltipContent;
