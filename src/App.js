import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import AllCars from "./components/BookingCars/BookingCars";
function App() {
  return (
    <div className="flex">
      <div className="xl:w-1/6">
        <Sidebar/>
      </div>
      <div className="w-full">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/BookingCars" element={<AllCars/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
