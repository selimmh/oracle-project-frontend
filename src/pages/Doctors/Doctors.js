import React, { useState, useEffect } from 'react'
import { AddPopup } from '../../components'
import { UserContext } from '../../context'
import Popup from '../../utils/Popup/Popup'
import axios from 'axios'
import { AddDoctor } from '../../components'

const headers = [
    '#',
    'Prenume',
    'Nume',
    'Camera',
    'Email',
    'Telefon',
    'Actions',
]

function Doctors() {
    const [state, dispatch] = React.useContext(UserContext)
    const [doctors, setDoctors] = useState([])
    // get doctors
    const getDoctors = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/medic`)
            setDoctors(res.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getDoctors()
    }, [])

    // delete doctor
    const deleteDoctor = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/medic/${id}`, {})
            getDoctors()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        // container
        <div className='w-full h-full flex flex-col items-center'>
            {/* content */}
            <div className='flex flex-col items-center justify-center w-[80%] h-full y-2'>
                {/* searchbar and add button */}
                <div className='flex w-full justify-start py-8 space-x-4'>
                    <input
                        className='px-4 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out'
                        type='text'
                        placeholder='Search...'
                    />

                    <button
                        onClick={() => dispatch({ type: 'toggle_button' })}
                        className='bg-white  rounded-lg text-gray-500 text-sm py-2 px-4 border-gray-300 border-2 hover:border-gray-500 transition-all duration-300 ease-in-out'
                    >
                        Adauga medic
                    </button>
                </div>
                {/* table */}
                <div className='w-full h-[80%] flex flex-col items-center overflow-auto'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        {/* head */}
                        <thead className='text-sm text-gray-700 bg-gray-50 '>
                            <tr>
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        scope='col'
                                        className='px-6 py-3'
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody>
                            {doctors.map((doctor, index) => (
                                <tr
                                    key={index + 1}
                                    className='bg-white border-b  hover:bg-gray-50'
                                >
                                    <td className='px-6 py-4'>{index + 1}</td>
                                    <td className='px-6 py-4'>
                                        {doctor.prenume}
                                    </td>
                                    <td className='px-6 py-4'>{doctor.nume}</td>
                                    <td className='px-6 py-4'>
                                        {doctor.camera}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {doctor.email}
                                    </td>
                                    <td className='px-6 py-4'>{doctor.tel}</td>
                                    <button
                                        onClick={() => deleteDoctor(doctor.id)}
                                        className='px-6 py-4'
                                    >
                                        Del
                                    </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* popup */}
            {state.active && <Popup children={<AddDoctor />} />}
        </div>
    )
}

export default Doctors
