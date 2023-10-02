import React, { useState } from 'react';
import axios from "axios";
import Image from 'next/image';

export default function SidebarEstudiantes ({ Estudiantes }) {

    const [] = useState({
        EE_idenficador:"",
        UO_primer_nombre: "",
        UO_identificador: "",
        EE_nivel: "",
        TP_nombre: "",
        TP_identificador: "",
        AO_descripcion: "",
        DO_nombre: "",
        EE_campus: "",
        HO_fecha: "",
        LP_fechaDevolucion: "",
        RE_observacion: "",
        CE_correoElectronico: "",
        TO_numero: "",
      });

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
                                    Observacion
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Correo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Telefono
                                </th>
                                <th scope="col" class="px-6 py-3 w-20">
                                    Administrar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Estudiantes.map((Estudiantes) => (

                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group" key={Estudiantes.EE_idenficador}>
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    {Estudiantes.UO_primer_nombre}
                                </th>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.UO_identificador}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.EE_nivel}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.TP_nombre}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.TP_identificador}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.AO_descripcion}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.DO_nombre}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.EE_campus}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.HO_fecha}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.LP_fechaDevolucion}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.RE_observacion} 
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.CE_correoElectronico}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Estudiantes.TO_numero}
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
                </div>
            </div>
        )
    }

    export const getServerSideProps = async (context) => {
        try{
        const { data: Estudiantes } = await axios.get(
            "http://localhost:3000/api/config/BibliotecaEstudiantes"
        )
        return {
            props: {
                Estudiantes,
            },
        };
        }catch(error){
        console.log(error)
        }
    };