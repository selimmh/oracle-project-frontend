import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Appointments,
  Patients,
  Doctors,
  Diagnoses,
  Treatments,
  Main,
} from "./pages";

import { Navbar } from "./components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        fontSize: "2rem",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/patients" element={<Doctors />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/diagnoses" element={<Diagnoses />} />
          <Route path="/treatments" element={<Treatments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
