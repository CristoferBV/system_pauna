import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SidebarEstudiantes = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="flex flex-col lg:flex-row bg-black" >
            <div className="lg:w-1/5  bg-[#021730] shadow-inner text-white min-h-screen overflow-y-auto">
                <div className="text-center text-2xl font-semibold mt-6">
                    <div className="flex items-center">
                        <div className="w-20 h-20 bg-[#0E21CD] rounded-full flex items-center justify-center mx-4 mt-4">
                            <Image src="/LOGO-UNA1-Blanco 2.png" alt="logo universidad nacional de costa rica" width={80} height={80} />
                        </div>
                        <div className="text-white ml-2 mt-4">PAUNA</div>
                    </div>
                </div>
                <ul className="flex-grow mt-10 space-y-4">
                <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar"}>
                    <li className="py-4 pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200" onClick={()=>setActive(1)}>
                        <span className="font-bold font-inika">Dispositivos</span>
                    </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas"}>
                    <li className="py-4 pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200" onClick={()=>setActive(2)}>
                        <span className=" font-bold font-inika">Citas</span>
                    </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarEstudiantes"}>
                    <li className="py-4 pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200" onClick={()=>setActive(3)}>
                        <span className=" font-bold font-inika">Estudiantes</span>
                    </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarDevoluciones"}>
                    <li className="py-4 pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200" onClick={()=>setActive(4)}>
                        <span className="font-bold font-inika">Devoluciones</span>
                    </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarReporte"}>
                    <li className="py-4 pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200" onClick={()=>setActive(5)}>
                        <span className="font-bold font-inika">Reporte</span>
                    </li>
                    </Link>
                    <li className='py-4 pl-20 flex items-center justify-between'>
                        <span className='font-bold font-inika'>Modo Oscuro</span>
                        <label className="relative inline-flex items-center cursor-pointer mr-14">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-16 h-8 bg-[#1B3555] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-[#8299EC]"></div>
                        </label>
                    </li>
                    <li>
                        <button className='rounded-xl ml-16 text-white border-white mt-6 w-32 h-10 bg-[#132335] hover:bg-[#c43f3f]'>Cerrar Cesion</button>
                    </li>
                </ul>
            </div>

            {/*<-------------------- Tabla-------------------------> */}

            <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md">
                <div className="relative overflow-x-auto shadow-md bg-[#041A34] overflow-y-auto">
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
                                    Nivel
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Requiere
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Activo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Caracteristicas
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Perteneciente
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Otro Campus
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fecha de prestamo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fecha Devolucion
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fecha devuelto
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Beca
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Observacion
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Correo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Telefono
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ubicacion
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Administrar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    Andrey Barrios Valverde
                                </th>
                                <td class="px-6 py-4 text-white">
                                    118080476
                                </td>
                                <td class="px-6 py-4 text-white">
                                    II
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-white">
                                    N0WER1
                                </td>
                                <td class="px-6 py-4 text-white">
                                    i5 decima generacion
                                    hp 2022
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Direccion Academica
                                </td>
                                <td class="px-6 py-4 text-white">
                                    PZ
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-5-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-8-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    9-7-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Luis Felipe
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Devuelta
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey@gmail.com
                                </td>
                                <td class="px-6 py-4 text-white">
                                    85151254
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Caja 1 lote direccion academica
                                </td>
                                <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                                </td>
                            </tr>
                            <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    Andrey Barrios Valverde
                                </th>
                                <td class="px-6 py-4 text-white">
                                    118080476
                                </td>
                                <td class="px-6 py-4 text-white">
                                    II
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-white">
                                    N0WER1
                                </td>
                                <td class="px-6 py-4 text-white">
                                    i5 decima generacion
                                    hp 2022
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Direccion Academica
                                </td>
                                <td class="px-6 py-4 text-white">
                                    PZ
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-5-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-8-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    9-7-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Luis Felipe
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Devuelta
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey@gmail.com
                                </td>
                                <td class="px-6 py-4 text-white">
                                    85151254
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Caja 1 lote direccion academica
                                </td>
                                <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                                </td>
                            </tr>
                            <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    Andrey Barrios Valverde
                                </th>
                                <td class="px-6 py-4 text-white">
                                    118080476
                                </td>
                                <td class="px-6 py-4 text-white">
                                    II
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-white">
                                    N0WER1
                                </td>
                                <td class="px-6 py-4 text-white">
                                    i5 decima generacion
                                    hp 2022
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Direccion Academica
                                </td>
                                <td class="px-6 py-4 text-white">
                                    PZ
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-5-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-8-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    9-7-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Luis Felipe
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Devuelta
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey@gmail.com
                                </td>
                                <td class="px-6 py-4 text-white">
                                    85151254
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Caja 1 lote direccion academica
                                </td>
                                <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                                </td>
                            </tr>
                            <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    Andrey Barrios Valverde
                                </th>
                                <td class="px-6 py-4 text-white">
                                    118080476
                                </td>
                                <td class="px-6 py-4 text-white">
                                    II
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-white">
                                    N0WER1
                                </td>
                                <td class="px-6 py-4 text-white">
                                    i5 decima generacion
                                    hp 2022
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Direccion Academica
                                </td>
                                <td class="px-6 py-4 text-white">
                                    PZ
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-5-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-8-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    9-7-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Luis Felipe
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Devuelta
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey@gmail.com
                                </td>
                                <td class="px-6 py-4 text-white">
                                    85151254
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Caja 1 lote direccion academica
                                </td>
                                <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66] group">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                                </td>
                            </tr>
                            <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    Andrey Barrios Valverde
                                </th>
                                <td class="px-6 py-4 text-white">
                                    118080476
                                </td>
                                <td class="px-6 py-4 text-white">
                                    II
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-white">
                                    N0WER1
                                </td>
                                <td class="px-6 py-4 text-white">
                                    i5 decima generacion
                                    hp 2022
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Direccion Academica
                                </td>
                                <td class="px-6 py-4 text-white">
                                    PZ
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-5-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-8-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    9-7-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Luis Felipe
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Devuelta
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey@gmail.com
                                </td>
                                <td class="px-6 py-4 text-white">
                                    85151254
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Caja 1 lote direccion academica
                                </td>
                                <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                                </td>
                            </tr>
                            <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    Andrey Barrios Valverde
                                </th>
                                <td class="px-6 py-4 text-white">
                                    118080476
                                </td>
                                <td class="px-6 py-4 text-white">
                                    II
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-white">
                                    N0WER1
                                </td>
                                <td class="px-6 py-4 text-white">
                                    i5 decima generacion
                                    hp 2022
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Direccion Academica
                                </td>
                                <td class="px-6 py-4 text-white">
                                    PZ
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-5-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-8-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    9-7-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Luis Felipe
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Devuelta
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey@gmail.com
                                </td>
                                <td class="px-6 py-4 text-white">
                                    85151254
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Caja 1 lote direccion academica
                                </td>
                                <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                                </td>
                            </tr>
                            <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    Andrey Barrios Valverde
                                </th>
                                <td class="px-6 py-4 text-white">
                                    118080476
                                </td>
                                <td class="px-6 py-4 text-white">
                                    II
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-white">
                                    N0WER1
                                </td>
                                <td class="px-6 py-4 text-white">
                                    i5 decima generacion
                                    hp 2022
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Direccion Academica
                                </td>
                                <td class="px-6 py-4 text-white">
                                    PZ
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-5-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-8-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    9-7-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Luis Felipe
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Devuelta
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey@gmail.com
                                </td>
                                <td class="px-6 py-4 text-white">
                                    85151254
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Caja 1 lote direccion academica
                                </td>
                                <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                                </td>
                            </tr>
                            <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    Andrey Barrios Valverde
                                </th>
                                <td class="px-6 py-4 text-white">
                                    118080476
                                </td>
                                <td class="px-6 py-4 text-white">
                                    II
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-white">
                                    N0WER1
                                </td>
                                <td class="px-6 py-4 text-white">
                                    i5 decima generacion
                                    hp 2022
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Direccion Academica
                                </td>
                                <td class="px-6 py-4 text-white">
                                    PZ
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-5-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    5-8-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    9-7-2023
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Luis Felipe
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Devuelta
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Andrey@gmail.com
                                </td>
                                <td class="px-6 py-4 text-white">
                                    85151254
                                </td>
                                <td class="px-6 py-4 text-white">
                                    Caja 1 lote direccion academica
                                </td>
                                <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default SidebarEstudiantes