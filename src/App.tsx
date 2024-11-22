import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Statistics from "./components/Statistics";
import SalesOverview from "./components/graph/SalesOverview";
import SalesRegion from "./components/graph/SalesRegion";
import UserStatsOverview from "./components/graph/UserStatsOverview";
import Integrations from "./components/Integrations";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { isCompactMode } = useSelector(
    (state: RootState) => state.isCompactMode
  );
  return (
    <div className="font-roboto">
      <nav className="fixed left-0 top-0 bg-white z-10 w-max">
        <Navbar />
      </nav>
      <div className=" fixed top-0 left-0 w-full">
        <TopBar />
      </div>
      <div
        className={` bg-blue-4 ${
          isCompactMode ? `pl-5` : `pl-48`
        } pt-28 h-full flex flex-col gap-10 pb-10`}
      >
        <Statistics />
        <div className="w-[96%] grid grid-cols-3 gap-4 pl-4">
          <div className=" col-span-2">
            <SalesOverview />
          </div>
          <div className=" col-span-1">
            <SalesRegion />
          </div>
        </div>
        <div className="w-[96%] grid grid-cols-3 gap-4 pl-4">
          <div className=" col-span-1">
            <UserStatsOverview />
          </div>
          <div className=" col-span-2">
            <Integrations />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
