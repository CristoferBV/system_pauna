import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SidebarReporte = () => {

    return (
        <div className="flex flex-col lg:flex-row bg-black" >
            <div className="lg:w-1/5 bg-[#021730] shadow-inner text-white min-h-screen overflow-y-auto fixed left-0 top-0 bottom-0">
                <div className="text-center text-2xl font-semibold mt-4 lg:mt-6">
                    <div className="flex items-center">
                        <div className="w-12 h-12 lg:w-20 lg:h-20 bg-[#0E21CD] rounded-full flex items-center justify-center mx-2 lg:mx-4 mt-2 lg:mt-4">
                            <Image src="/LOGO-UNA1-Blanco 2.png" alt="logo universidad nacional de costa rica" width={80} height={80} />
                        </div>
                        <div className="text-white ml-2 mt-2 lg:mt-4 text-sm lg:text-base">PAUNA</div>
                    </div>
                </div>
                <ul className="flex-grow mt-4 lg:mt-10 space-y-2 lg:space-y-4">
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Dispositivos</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Citas</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarEstudiantes"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Estudiantes</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarDevoluciones"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Devoluciones</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarReporte"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Reporte</span>
                        </li>
                    </Link>
                    <Link href={"/LoginAndRegister/Login/Login"}>
                        <li>
                            <button className='rounded-xl ml-2 lg:ml-16 text-white border-white mt-2 lg:mt-32 w-24 lg:w-32 h-8 lg:h-10 bg-[#132335] hover:bg-[#c43f3f]'>Cerrar Sesión</button>
                        </li>
                    </Link>
                </ul>
            </div>

            {/*<-------------------- Tabla-------------------------> */}

            <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md ml-[20%] min-h-screen">
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

                <div className="relative overflow-x-auto shadow-md bg-[#041A34] overflow-y-auto min-h-[calc(100vh-64px)]">
                    <table class="w-full text-sm text-center text-[#757373]">
                        <thead class="text-xs text-[#ffffff] uppercase bg-[#132335]">
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
                    <button className='rounded-xl text-white border-white mt-6 ml-3 w-40 h-10 bg-[#132335] hover:bg-[#242d66]'>Reporte Individual</button>
                    <button className='rounded-xl text-white border-white mt-6 ml-3 w-40 h-10 bg-[#132335] hover:bg-[#242d66]'>Reporte General</button>
                </div>
            </div>

        </div>
    )
}

export default SidebarReporte