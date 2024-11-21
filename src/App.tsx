import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Statistics from "./components/Statistics";
import SalesOverview from "./components/graph/SalesOverview";
import SalesRegion from "./components/graph/SalesRegion";

function App() {
  return (
    <div className="font-roboto">
      <nav className="fixed left-0 top-0 bg-white z-10">
        <Navbar />
      </nav>
      <div className=" fixed top-0 left-0 w-full">
        <TopBar />
      </div>
      <div className=" bg-blue-4 pl-48 pt-16 h-full flex flex-col">
        <Statistics />
        <div className="w-[96%] grid grid-cols-3 gap-4 pl-4">
          <div className=" col-span-2">
            <SalesOverview />
          </div>
          <div className=" col-span-1">
            <SalesRegion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
