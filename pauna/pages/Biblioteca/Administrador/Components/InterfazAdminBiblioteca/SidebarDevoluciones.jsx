import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SidebarDevoluciones = () => {

    return (
            <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
                <div className="relative overflow-x-auto shadow-md bg-[#041A34] overflow-y-auto  min-h-[calc(100vh-64px)]">
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
                        </tbody>
                    </table>
                    <button className='rounded-xl text-white border-white mt-6 ml-3 w-40 h-12 bg-[#132335]'>Advertencia</button>
                </div>
            </div>
    )
}

export default SidebarDevoluciones