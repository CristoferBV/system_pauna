import React, { useState } from 'react';
import axios from "axios";
import Image from 'next/image';

export default function SidebarReporte ({ Reporte }) {

    const [] = useState({
        EE_idenficador:"",
        UO_primer_nombre: "",
        UO_identificador: "",
        TP_nombre: "",
        EA_nombre: "",
        CA_nombre: "",
        HO_fecha: "",
        LP_fechaDevolucion: "",
        CE_correoElectronico: "",
      });

    return (
            <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
                <form className='mb-5'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#132335] hover:bg-[#242d66] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>

                <div className="relative overflow-x-auto bg-[#041A34] overflow-y-auto min-h-[calc(100vh-64px)]">
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
                                    Periferico
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Carrera
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fecha entregado
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fecha devolucion
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Correo
                                </th>
                                <th scope="col" class="px-6 py-3 w-20">
                                    Administrar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Reporte.map((Reporte) => (

                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group" key={Reporte.EE_idenficador}>
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    {Reporte.UO_primer_nombre}
                                </th>
                                <td className="px-6 py-4 text-white">
                                    {Reporte.UO_identificador}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Reporte.TP_nombre}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Reporte.EA_nombre}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Reporte.CA_nombre}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Reporte.HO_fecha}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Reporte.LP_fechaDevolucion}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {(Reporte["CE-correoElectronico"])}
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
                            ))}
                        </tbody>
                    </table>
                    <button className=' text-white border-white text-sm mt-6 ml-3 w-40 h-10 bg-[#132335] hover:bg-[#242d66]'>Reporte Individual</button>
                    <button className=' text-white border-white text-sm  mt-6 ml-3 w-40 h-10 bg-[#132335] hover:bg-[#242d66]'>Reporte General</button>
                </div>
            </div>
        );
    }

    export const getServerSideProps = async (context) => {
        try{
        const { data: Reporte } = await axios.get(
            "http://localhost:3000/api/config/BibliotecaReportes"
        )
        return {
            props: {
                Reporte,
            },
        };
        }catch(error){
            console.log(error)
            return {
                props: {
                    Reporte: [], // Puedes proporcionar un valor predeterminado en caso de error.
                },
            };
        }
    };
