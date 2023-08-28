import React from 'react'

const ToggleButton = () => {
    return (
        <li className='py-4 pl-20 flex items-center justify-between'>
            <span className='text-left text-lg font-bold font-inika'>Modo Oscuro</span>
            <label className="relative inline-flex items-center cursor-pointer mr-14">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-16 h-8 bg-[#1B3555] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-[#8299EC]"></div>
            </label>
        </li>
    )
}

export default ToggleButton