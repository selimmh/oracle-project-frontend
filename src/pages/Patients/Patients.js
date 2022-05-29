import React, { useState, useEffect } from "react";
import axios from "axios";

function Patients() {
  // state api call
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
        <input type="text" placeholder="nume" id="nume" value={patients.NUME} />
        <input
          type="text"
          placeholder="nrTel"
          id="nrTel"
          value={patients.NR_TEL}
        />
        <input
          type="text"
          placeholder="dataNastere"
          id="dataNastere"
          value={patients.DATA_NASTERE}
        />
        <input type="text" placeholder="gen" id="gen" value={patients.GEN} />
        <input
          type="text"
          placeholder="email"
          id="email"
          value={patients.EMAIL}
        />
        <button
          onClick={(e) =>
            addPatient(
              e.target.parentElement.children[0].value,
              e.target.parentElement.children[1].value,
              e.target.parentElement.children[2].value,
              e.target.parentElement.children[3].value,
              e.target.parentElement.children[4].value
            )
          }
        >
          add
        </button>
        <button
          onClick={(e) =>
            editPatient(
              e.target.parentElement.children[0].value,
              e.target.parentElement.children[1].value,
              e.target.parentElement.children[2].value,
              e.target.parentElement.children[3].value,
              e.target.parentElement.children[4].value
            )
          }
        >
          edit
        </button>
      </div>
      <br />
      <br />
      {/* Patients list */}
      Patients
      {patients?.[0] ? (
        <ul>
          {patients.map((patient) => (
            <li key={patient.PATIENT_ID}>
              {patient.NUME} {patient.NR_TEL} {patient.DATA_NASTERE}{" "}
              {patient.GEN} {patient.EMAIL}
              <button onClick={() => deletePatient(patient.PATIENT_ID)}>
                del
              </button>
              <button onClick={() => setPatients(patient)}>edit</button>
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
