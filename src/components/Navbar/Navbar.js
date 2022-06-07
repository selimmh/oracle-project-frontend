import React from "react";
import { useNavigate, useLocation } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <ul className="flex w-full text-xl bg-transparent border select-none">
        <li
          className={`py-6 cursor-pointer flex justify-center basis-1/4 transition-all duration-300 ease-in-out active:bg-gray-300 hover:bg-gray-200 ${
            location.pathname === "/" && `bg-gray-200`
          }`}
          onClick={() => navigate("/")}
        >
          Acasa
        </li>
        <li
          className={`py-6 cursor-pointer flex justify-center basis-1/4 transition-all duration-300 ease-in-out active:bg-gray-300 hover:bg-gray-200 ${
            location.pathname === "/patients" && `bg-gray-200`
          }`}
          onClick={() => navigate("/patients")}
        >
          Pacienti
        </li>
        <li
          className={`py-6 cursor-pointer flex justify-center basis-1/4 transition-all duration-300 ease-in-out active:bg-gray-300 hover:bg-gray-200 ${
            location.pathname === "/doctors" && `bg-gray-200`
          }`}
          onClick={() => navigate("/doctors")}
        >
          Medici
        </li>
        <li
          className={`py-6 cursor-pointer flex justify-center basis-1/4 transition-all duration-300 ease-in-out active:bg-gray-300 hover:bg-gray-200 ${
            location.pathname === "/appointments" && `bg-gray-200`
          }`}
          onClick={() => navigate("/appointments")}
        >
          Programari
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
