import { convertToDollar } from "../lib/helper";
import Icons, { IconName } from "./Icons";
import ProgressBar from "./ProgressBar";
import TableCheckBox from "./TableCheckBox";

interface IIntegrationRow {
  type: string;
  title: string;
  rate: string;
  profit: string;
}

const IntegrationRow = ({ rate, title, type, profit }: IIntegrationRow) => {
  return (
    <>
      <tr className="w-full text-body-text text-black-60">
        <td className=" flex flex-row items-center gap-6 px-2 py-5">
          <TableCheckBox />
          <div className=" flex flex-row items-center gap-2">
            <span className=" p-1 border border-r-black-16">
              <Icons name={title.toLowerCase() as IconName} />
            </span>
            <p className=" text-body-text text-black">{title}</p>
          </div>
        </td>
        <td className=" px-2 py-4">
          <p>{type}</p>
        </td>
        <td className=" flex flex-row items-center gap-2">
          <ProgressBar max={100} value={rate} />
          <p>{rate}</p>
        </td>
        <td className="px-2 py-4">
          <p>{convertToDollar(Number(profit))}</p>
        </td>
      </tr>
      <hr className=" w-[340%]" />
    </>
  );
};

export default IntegrationRow;
