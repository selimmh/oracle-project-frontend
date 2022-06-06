import React, { useState } from 'react'
import axios from 'axios'

function AddDoctor() {
    // add doctor
    const addDoctor = async (ID, PRENUME, NUME, CAMERA, EMAIL, TEL) => {
        try {
            await axios.post(`http://localhost:8000/medic`, {
                id: ID,
                prenume: PRENUME,
                nume: NUME,
                camera: CAMERA,
                email: EMAIL,
                tel: TEL,
            })
        } catch (error) {
            console.error(error)
        }
    }

    const [id, setId] = useState('')
    const [prenume, setPrenume] = useState('')
    const [nume, setNume] = useState('')
    const [camera, setCamera] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    return (
        <div className='flex flex-col py-8 px-4 space-y-2'>
            {/* id */}
            <input
                className='px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out'
                type='text'
                placeholder='id'
                id='id'
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            {/* prenume */}
            <input
                className='px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out'
                type='text'
                placeholder='Prenume'
                id='prenume'
                value={prenume}
                onChange={(e) => setPrenume(e.target.value)}
            />
            {/* nume */}
            <input
                className='px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out'
                type='text'
                placeholder='Nume'
                id='nume'
                value={nume}
                onChange={(e) => setNume(e.target.value)}
            />
            {/* camera */}
            <input
                className='px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out'
                type='text'
                placeholder='Camera'
                id='camera'
                value={camera}
                onChange={(e) => setCamera(e.target.value)}
            />
            {/* email */}
            <input
                className='px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out'
                type='text'
                placeholder='Email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* telefon */}
            <input
                className='px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out'
                type='text'
                placeholder='Telefon'
                id='tel'
                value={tel}
                onChange={(e) => setTel(e.target.value)}
            />
            {/* submit */}
            <button
                onClick={() => addDoctor(id, prenume, nume, camera, email, tel)}
                className='bg-white  rounded-lg text-gray-500 text-lg py-2 px-4 border-gray-300 border-2 hover:border-gray-500 transition-all duration-300 ease-in-out'
            >
                Adauga
            </button>
        </div>
    )
}

export default AddDoctor
