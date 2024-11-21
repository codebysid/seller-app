import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Statistics from "./components/Statistics";
import SalesOverviewChart from "./components/graph/SalesOverviewChart";

function App() {
  return (
    <div className="font-roboto">
      <nav className="fixed left-0 top-0 bg-white z-10">
        <Navbar />
      </nav>
      <div className=" fixed top-0 left-0 w-full">
        <TopBar />
      </div>
      <div className=" bg-blue-4 fixed top-16 left-48 w-full h-full">
        <Statistics />
        <SalesOverviewChart />
        {/* <SalesOverviewChart2 /> */}
      </div>
    </div>
  );
}

export default App;
