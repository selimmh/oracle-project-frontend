import React from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="flex w-full justify-around text-xl bg-blue-300 py-4">
        <li className="cursor-pointer" onClick={() => navigate("/")}>
          Main
        </li>
        <li className="cursor-pointer" onClick={() => navigate("/patients")}>
          Patients
        </li>
        <li className="cursor-pointer" onClick={() => navigate("/doctors")}>
          Doctors
        </li>
        <li
          className="cursor-pointer"
          onClick={() => navigate("/appointments")}
        >
          Appointments
        </li>
        <li className="cursor-pointer" onClick={() => navigate("/diagnoses")}>
          Diagnoses
        </li>
        <li className="cursor-pointer" onClick={() => navigate("/treatments")}>
          Treatments
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
