import React, { useState } from "react";
import axios from "axios";

function AddAppointment() {
  // add doctor
  const addDoctor = async (prenume, nume, spec, camera, email, tel) => {
    try {
      await axios.post(`http://localhost:8080/doctor/add`, {
        prenume: prenume,
        nume: nume,
        spec: spec,
        camera: camera,
        email: email,
        tel: tel,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [prenume, setPrenume] = useState("");
  const [nume, setNume] = useState("");
  const [spec, setSpec] = useState("");
  const [camera, setCamera] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  return (
    <form className="flex flex-col py-8 px-4 space-y-2">
      {/* title */}
      <h1 className="text-lg">Programare noua</h1>
      {/* Doctor */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Prenume"
        id="prenume"
        value={prenume}
        required
        onChange={(e) => setPrenume(e.target.value)}
      />
      {/* Pacient */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Nume"
        id="nume"
        value={nume}
        required
        onChange={(e) => setNume(e.target.value)}
      />
      {/* Time */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Specializare"
        id="spec"
        value={spec}
        required
        onChange={(e) => setSpec(e.target.value)}
      />
      {/* medicament */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="number"
        placeholder="Camera"
        id="camera"
        value={camera}
        required
        onChange={(e) => setCamera(e.target.value)}
      />
      {/* tratament */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="email"
        placeholder="Email"
        id="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* submit */}
      <input
        className="bg-white  rounded-lg text-gray-500 text-lg py-2 px-4 border-gray-300 border-2 hover:border-gray-500 transition-all duration-300 ease-in-out"
        type="submit"
        value="Adauga"
        onClick={() => addDoctor(prenume, nume, spec, camera, email, tel)}
      />
    </form>
  );
}

export default AddAppointment;
