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
  const { isCompactMode, theme } = useSelector((state: RootState) => state);
  return (
    <div
      className={`font-roboto ${theme.dark ? `dark` : `light`} text-textColor`}
    >
      <nav className="fixed left-0 top-0 bg-background z-10 w-max">
        <Navbar />
      </nav>
      <div className=" fixed top-0 left-0 w-full">
        <TopBar />
      </div>
      <div
        className={` bg-layoutBg ${
          isCompactMode.isCompactMode ? `pl-24 lg:pl-5` : `pl-48`
        } pt-28 h-full flex flex-col gap-5 pb-10`}
      >
        <Statistics />
        <div className="w-[96%] lg:grid lg:grid-cols-3 flex flex-col gap-4 pr-4 lg:pl-4">
          <div className=" lg:col-span-2">
            <SalesOverview />
          </div>
          <div className=" lg:col-span-1">
            <SalesRegion />
          </div>
        </div>

        <div className="w-[96%] lg:grid lg:grid-cols-3 flex flex-col gap-4 pr-4 lg:pl-4">
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
