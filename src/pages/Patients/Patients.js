import React, { useState, useEffect } from "react";
import { UserContext } from "../../context";
import axios from "axios";

import Popup from "../../utils/Popup/Popup";
import { AddPacient } from "../../components";
import { VscAdd } from "react-icons/vsc";

const headers = [
  "#",
  "Prenume",
  "Nume",
  "Gen",
  "Ani",
  "Adresa",
  "Email",
  "Telefon",
  "Actions",
];

function Patients() {
  // context
  const [state, dispatch] = React.useContext(UserContext);

  // data state
  const [patients, setPatients] = useState([]);
  console.log(patients);

  // get patients
  const getPatients = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/pacient/get`);
      setPatients(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPatients();
  }, []);

  // delete patients
  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/pacient/delete`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          userId: id,
        },
      });
      getPatients();
    } catch (error) {
      console.error(error);
    }
  };

  // filter
  const [query, setQuery] = useState("");

  return (
    // container
    <div className="w-full h-full flex flex-col items-center">
      {/* content */}
      <div className="flex flex-col items-center justify-center w-[80%] h-full y-2">
        {/* searchbar and add button */}
        <div className="flex w-full justify-start py-8 space-x-4">
          <input
            className="px-4 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() => dispatch({ type: "toggle_button" })}
            className="bg-white  rounded-lg text-gray-500 text-sm py-2 px-4 border-gray-300 border-2 hover:border-gray-500 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2"
          >
            <VscAdd />
            <span>Adauga pacient</span>
          </button>
        </div>
        {/* table */}
        <div className="w-full h-[80%] flex flex-col items-center overflow-auto shadow-xl rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            {/* head */}
            <thead className="text-sm text-gray-700 bg-gray-50 ">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {patients
                .filter(
                  (patient) =>
                    patient.PRENUME.toLowerCase().includes(query) ||
                    patient.NUME.toLowerCase().includes(query)
                )
                .map((patient, index) => (
                  <tr
                    key={patient.ID_PACIENT}
                    className="bg-white border-b  hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{patient.PRENUME}</td>
                    <td className="px-6 py-4">{patient.NUME}</td>
                    <td className="px-6 py-4">{patient.GEN}</td>
                    <td className="px-6 py-4">{patient.ANI}</td>
                    <td className="px-6 py-4">{patient.ADRESA}</td>
                    <td className="px-6 py-4">{patient.EMAIL}</td>
                    <td className="px-6 py-4">{patient.TEL}</td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-400 px-3 py-1 text-white rounded-md hover:bg-blue-600 active:bg-blue-900 transition-all duration-300 ease-in-out">
                        Edit
                      </button>
                      <button
                        onClick={() => deletePatient(patient.ID_PACIENT)}
                        className="bg-red-400 px-3 py-1 text-white rounded-md ml-2 hover:bg-red-600 active:bg-red-900 transition-all duration-300 ease-in-out"
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* popup */}
      {state.active && <Popup children={<AddPacient />} />}
    </div>
  );
}

export default Patients;
