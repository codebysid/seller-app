import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-roboto">
      <nav className="fixed left-0 top-0">
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
