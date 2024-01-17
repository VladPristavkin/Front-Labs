import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import Services from "./pages/Services";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeHandbook from "./pages/EmployeeHandbook";
import Support from "./pages/Support";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/services' element={<Services />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/addEmployee' element={<AddEmployee />} />
        <Route path='/handbook' element={<EmployeeHandbook />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
