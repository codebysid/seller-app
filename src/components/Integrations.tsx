import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import IntegrationRow from "./IntegrationRow";
import TableCheckBox from "./TableCheckBox";

const Integrations = () => {
  const { integrations } = useSelector(
    (state: RootState) => state.selectedCountry
  );
  return (
    <div className=" w-full bg-background border border-borderColor rounded-lg p-5 flex flex-col gap-7">
      <h1 className=" text-head-s">List of Integrations</h1>
      <table className="w-full ">
        <thead>
          <tr className=" text-body-text text-textColor/60 text-left rounded-lg bg-blue/10 ">
            <th className=" flex flex-row gap-6 items-baseline px-2 py-3">
              <TableCheckBox />
              <span>Application</span>
            </th>
            <th>Type</th>
            <th>Rate</th>
            <th>Profit</th>
          </tr>
        </thead>
        {integrations &&
          integrations.map((ele) => {
            return (
              <IntegrationRow
                key={ele.id}
                type={ele.type}
                title={ele.title}
                profit={ele.profit}
                rate={ele.rate}
              />
            );
          })}
      </table>
    </div>
  );
};

export default Integrations;
