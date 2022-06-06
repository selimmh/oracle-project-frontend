import React, { useState } from "react";
import axios from "axios";

function AddPacient() {
  // add doctor
  const addPacient = async (prenume, nume, gen, ani, adresa, email, tel) => {
    try {
      if (
        prenume === "" ||
        nume === "" ||
        gen === "" ||
        ani === "" ||
        adresa === "" ||
        email === "" ||
        tel === ""
      ) {
        throw new Error("Please fill in all the fields");
      }
      await axios.post(`http://localhost:8080/pacient/add`, {
        prenume: prenume,
        nume: nume,
        gen: gen,
        ani: ani,
        adresa: adresa,
        email: email,
        tel: tel,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [prenume, setPrenume] = useState("");
  const [nume, setNume] = useState("");
  const [gen, setGen] = useState("");
  const [ani, setAni] = useState("");
  const [adresa, setAdresa] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  return (
    <form className="flex flex-col py-8 px-4 space-y-2">
      {/* title */}
      <h1 className="text-lg">Pacient nou</h1>
      {/* prenume */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Prenume"
        id="prenume"
        value={prenume}
        required
        onChange={(e) => setPrenume(e.target.value)}
      />
      {/* nume */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Nume"
        id="nume"
        value={nume}
        required
        onChange={(e) => setNume(e.target.value)}
      />
      {/* gen */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Gen"
        id="gen"
        value={gen}
        required
        onChange={(e) => setGen(e.target.value)}
      />
      {/* ani */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="number"
        placeholder="Ani"
        id="ani"
        value={ani}
        required
        onChange={(e) => setAni(e.target.value)}
      />
      {/* adresa */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Adresa"
        id="adresa"
        value={adresa}
        required
        onChange={(e) => setAdresa(e.target.value)}
      />
      {/* email */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="email"
        placeholder="Email"
        id="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* telefon */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Telefon"
        id="tel"
        value={tel}
        required
        onChange={(e) => setTel(e.target.value)}
      />
      {/* submit */}
      <input
        className="bg-white  rounded-lg text-gray-500 text-lg py-2 px-4 border-gray-300 border-2 hover:border-gray-500 transition-all duration-300 ease-in-out"
        type="submit"
        value="Adauga"
        onClick={() => addPacient(prenume, nume, gen, ani, adresa, email, tel)}
      />
    </form>
  );
}

export default AddPacient;
