import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SidebarCitas = () => {

    return (
            <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
                <div className="relative overflow-x-auto shadow-md bg-[#041A34] overflow-y-auto  min-h-[calc(100vh-64px)]">
                    <table class="w-full text-sm text-center text-[#757373]">
                        <thead class="text-xs text-[#ffffff] uppercase bg-[#132335]">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Hora
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Lunes
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Martes
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Miercoles
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Jueves
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Viernes
                                </th>
                                <th scope="col" class="px-6 py-3 w-20">
                                    Administrar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <td class="px-6 py-4 text-white">
                                    10am
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Carlos Godines
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    David Hernadez
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <td class="px-6 py-4 text-white">
                                    10am
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">
                                    Carlos Godines
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    David Hernadez
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <td class="px-6 py-4 text-white">
                                    10am
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Carlos Godines
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <td class="px-6 py-4 text-white">
                                    10am
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <td class="px-6 py-4 text-white">
                                    10am
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">
                                    David Hernadez
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <td class="px-6 py-4 text-white">
                                    10am
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">
                                    David Hernadez
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <td class="px-6 py-4 text-white">
                                    10am
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">
                                    Carlos Godines
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    David Hernadez
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <td class="px-6 py-4 text-white">
                                    10am
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey Barrios
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td class="px-6 py-4 text-white">
                                    Carlos Godines
                                    Cedula:118080476
                                    Carrera:Ingenieria
                                    Beca Luis Felipe
                                    Asiganda:Laptop N00NJKLS3
                                </td>
                                <td class="px-6 py-4 text-white">

                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default SidebarCitas