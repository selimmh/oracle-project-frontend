import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function AddAppointment() {
  // get all doctors
  const [doctors, setDoctors] = useState([]);
  const getDoctors = async () => {
    try {
      const res = await axios.get(`http://localhost:8004/doctor/get`);
      setDoctors(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDoctors();
  }, []);

  // get all patients
  const [patients, setPatients] = useState([]);
  const getPatients = async () => {
    try {
      const res = await axios.get(`http://localhost:8004/pacient/get`);
      setPatients(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPatients();
  }, []);

  // add doctor
  const AddAppointment = async (
    idDoctor,
    idPacient,
    time,
    tratament,
    medicament
  ) => {
    try {
      await axios.post(
        `http://localhost:8004/programare/add`,
        {
          idDoctor: idDoctor,
          idPacient: idPacient,
          time: time,
          tratament: tratament,
          medicament: medicament,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const [idDoctor, setIdDoctor] = useState("");
  const [idPacient, setIdPacient] = useState("");
  const [time, setTime] = useState("");
  const [tratament, setTratament] = useState("");
  const [medicament, setMedicament] = useState("");

  let formattedTime = moment(time).format("YYYY-MM-DD HH:mm");

  console.log(idDoctor, idPacient, formattedTime, tratament, medicament);

  return (
    <form className="flex flex-col py-8 px-4 space-y-2">
      {/* title */}
      <h1 className="text-lg">Programare noua</h1>
      {/* Doctor */}
      <div className="flex flex-col space-y-2">
        <select
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out text-sm"
          value={idDoctor}
          onChange={(e) => setIdDoctor(e.target.value)}
        >
          <option value="" selected disabled>
            Medic
          </option>
          {doctors.map((doctor) => (
            <option key={doctor.ID_DOCTOR} value={doctor.ID_DOCTOR}>
              {doctor.PRENUME} {doctor.NUME}
            </option>
          ))}
        </select>
      </div>
      {/* Pacient */}
      <div className="flex flex-col space-y-2">
        <select
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out text-sm"
          value={idPacient}
          onChange={(e) => setIdPacient(e.target.value)}
        >
          <option selected disabled value="">
            Pacient
          </option>
          {patients.map((patient) => (
            <option key={patient.ID_PACIENT} value={patient.ID_PACIENT}>
              {patient.PRENUME} {patient.NUME}
            </option>
          ))}
        </select>
      </div>
      {/* Time */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="datetime-local"
        placeholder="Datetime"
        id="datetime-local"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      />
      {/* tratament */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Tratament"
        id="tratament"
        value={tratament}
        required
        onChange={(e) => setTratament(e.target.value)}
      />
      {/* medicament */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Medicament"
        id="medicament"
        value={medicament}
        required
        onChange={(e) => setMedicament(e.target.value)}
      />
      {/* submit */}
      <input
        className="bg-white  rounded-lg text-gray-500 text-lg py-2 px-4 border-gray-300 border-2 hover:border-gray-500 transition-all duration-300 ease-in-out"
        type="submit"
        value="Adauga"
        onClick={(e) => {
          AddAppointment(
            idDoctor,
            idPacient,
            moment(time).format("YYYY-MM-DD HH:mm"),
            tratament,
            medicament
          );
          e.preventDefault();
        }}
      />
    </form>
  );
}

export default AddAppointment;
