import React from 'react'

const TableReporte = () => {
    return (
        <div className="flex-1 p-8 h-full flex flex-col bg-[#041A34]">

            <form className='mb-5'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="relative overflow-x-auto shadow-md bg-[#041A34]">
                <table class="w-full text-sm text-center text-[#ffffff] dark:text-[#ffffff]">
                    <thead class="text-xs text-[#ffffff] uppercase bg-[#132335] dark:text-[#041A34] dark:bg-[#041A34]">
                        <tr>
                            <th scope="col" class="px-6 py-3    ">
                                Nombre
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cedula
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Dispositivo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Carrera
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha entregado
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Administrar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66] group">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                Tablet
                            </td>
                            <td class="px-6 py-4 text-white">
                                Ingenieria en Sistemas
                            </td>
                            <td class="px-6 py-4 text-white">
                                10-9-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                andrey@gmail.com
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className='rounded-xl text-white border-white mt-6 ml-3 w-40 h-12 bg-[#132335]'>Reporte Individual</button>
                <button className='rounded-xl text-white border-white mt-6 ml-3 w-40 h-12 bg-[#132335]'>Reporte General</button>
            </div>
        </div>
    )
}

export default TableReporte
