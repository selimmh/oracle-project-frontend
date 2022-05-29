import React from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          cursor: "pointer",
        }}
      >
        <li onClick={() => navigate("/")}>Main</li>
        <li onClick={() => navigate("/patients")}>Patients</li>
        <li onClick={() => navigate("/doctors")}>Doctors</li>
        <li onClick={() => navigate("/appointments")}>Appointments</li>
        <li onClick={() => navigate("/diagnoses")}>Diagnoses</li>
        <li onClick={() => navigate("/treatments")}>Treatments</li>
      </ul>
    </div>
  );
}

export default Navbar;
