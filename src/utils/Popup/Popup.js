import React from 'react'
import { UserContext } from '../../context'
import { RiCloseLine } from 'react-icons/ri'

// smooth transition when popup is active
function Popup({ children }) {
    const [state, dispatch] = React.useContext(UserContext)
    return (
        <div
            className={`fixed inset-0 flex flex-col items-center justify-center ${
                state.active ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {/* backdrop */}
            <div
                onClick={() => dispatch({ type: 'toggle_button' })}
                className={`fixed inset-0 bg-black bg-opacity-50 transition-all `}
            ></div>
            {/* content */}
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='bg-white rounded-lg shadow-lg p-4 z-50 relative'>
                    <button
                        onClick={() => dispatch({ type: 'toggle_button' })}
                        className='absolute top-0 right-0 m-2'
                    >
                        <RiCloseLine className='h-8 w-8 fill-gray-500 hover:fill-red-500 transition-all duration-300 ease-in-out' />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup
