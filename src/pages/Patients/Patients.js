import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Patients() {
  const [patients, setPatients] = useState([]);

  // get all patients
  const getPatients = async () => {
    try {
      const res = await axios.get(
        `https://api.dintie.yagmyrov.me/patienti/get`
      );
      setPatients(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPatients();
  }, []);

  // delete patient
  const deletePatient = async (id) => {
    try {
      await axios.delete(`https://api.dintie.yagmyrov.me/patienti/delete`, {
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

  // add patient
  const addPatient = async (NUME, NR_TEL, DATA_NASTERE, GEN, EMAIL) => {
    try {
      await axios.post(`https://api.dintie.yagmyrov.me/patienti/add`, {
        nume: NUME,
        nrTel: NR_TEL,
        dataNastere: DATA_NASTERE,
        gen: GEN,
        email: EMAIL,
      });
      getPatients();
    } catch (error) {
      console.error(error);
    }
  };

  // edit patient
  const editPatient = async (
    PATIENT_ID,
    NUME,
    NR_TEL,
    DATA_NASTERE,
    GEN,
    EMAIL
  ) => {
    try {
      await axios.put(`https://api.dintie.yagmyrov.me/patienti/update`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          userId: PATIENT_ID,
          nume: NUME,
          nrTel: NR_TEL,
          dataNastere: DATA_NASTERE,
          gen: GEN,
          email: EMAIL,
        },
      });
      getPatients();
    } catch (error) {
      console.error(error);
    }
  };

  // patient info states
  const [nume, setNume] = useState("");
  const [nrTel, setNrTel] = useState("");
  const [dataNastere, setDataNastere] = useState("");
  const [gen, setGen] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="nume"
          id="nume"
          onChange={(e) => setNume(e.target.value)}
        />
        <input
          type="text"
          placeholder="nrTel"
          id="nrTel"
          onChange={(e) => setNrTel(e.target.value)}
        />
        <input
          type="text"
          placeholder="dataNastere"
          id="dataNastere"
          onChange={(e) => setDataNastere(e.target.value)}
        />
        <input
          type="text"
          placeholder="gen"
          id="gen"
          onChange={(e) => setGen(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={(e) => addPatient(nume, nrTel, dataNastere, gen, email)}
        >
          add
        </button>
        <button onClick={(e) => editPatient()}>update</button>
        <button onClick={() => {}}>clear</button>
      </div>
      <br />
      {/* Patients list */}
      Patients
      {patients?.[0] ? (
        <ul>
          {patients.map((mapPacient) => (
            <li key={mapPacient.PATIENT_ID}>
              {mapPacient.NUME} {mapPacient.GEN} {mapPacient.EMAIL}
              <button onClick={() => deletePatient(mapPacient.PATIENT_ID)}>
                del
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Patients;
