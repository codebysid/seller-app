import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="font-roboto">
      <nav className="fixed left-0 top-0 bg-white z-10">
        <Navbar />
      </nav>
      <div className=" fixed top-0 left-0 w-full">
        <TopBar />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
