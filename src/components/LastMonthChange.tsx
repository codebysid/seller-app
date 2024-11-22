import Icons from "./Icons";

interface ILastMonthChange {
  value: string;
  style: "positive" | "negative";
}

const LastMonthChange = ({ value, style }: ILastMonthChange) => {
  return (
    <div className=" flex flex-row  items-center justify-start gap-2">
      <p
        className={`flex flex-row  items-center  gap-1 text-body-text py-[2px] px-1 rounded-[4px] ${
          style == "positive" ? `bg-green` : style == "negative" && `bg-red`
        } bg-green`}
      >
        <Icons name={style == "positive" ? "upArrowIcon" : "downArrowIcon"} />
        {value}
      </p>
      <p className=" text-body-text text-textColor/60">
        Compared to last month
      </p>
    </div>
  );
};

export default LastMonthChange;
