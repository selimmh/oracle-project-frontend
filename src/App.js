import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Appointments,
    Patients,
    Doctors,
    Diagnoses,
    Treatments,
    Main,
} from './pages'

import { UserProvider } from './context'

import { Navbar } from './components'

function App() {
    return (
        <UserProvider>
            <div className='flex flex-col h-screen w-screen text-[2rem] bg-gray-100'>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/patients' element={<Patients />} />
                        <Route path='/doctors' element={<Doctors />} />
                        <Route
                            path='/appointments'
                            element={<Appointments />}
                        />
                        <Route path='/diagnoses' element={<Diagnoses />} />
                        <Route path='/treatments' element={<Treatments />} />
                    </Routes>
                </Router>
            </div>
        </UserProvider>
    )
}

export default App
