import React, { useState } from 'react';
import axios from "axios";
import Image from 'next/image';

export default function SidebarDevoluciones({ Devoluciones }) {

    const [] = useState({
        EE_idenficador: "",
        UO_primer_nombre: "",
        UO_identificador: "",
        TP_nombre: "",
        CA_nombre: "",
        HO_fecha: "",
        LP_fechaDevolucion: "",
        CE_correoElectronico: "",
    });

    return (
        <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
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
                    {Devoluciones.map((Devoluciones) => (

                        <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group" key={Devoluciones.EE_idenficador}>
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                {Devoluciones.UO_primer_nombre}
                            </th>
                            <td className="px-6 py-4 text-white">
                                {Devoluciones.UO_identificador}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Devoluciones.TP_nombre}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Devoluciones.CA_nombre}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Devoluciones.HO_fecha}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Devoluciones.LP_fechaDevolucion}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Devoluciones.CE_correoElectronico}
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
            <button className=' text-white border-white mt-6 ml-3 w-36 h-10 bg-[#132335] hover:bg-[#242d66]'>Advertencia</button>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    try {
        const { data: Devoluciones } = await axios.get(
            "http://localhost:3000/api/config/BibliotecaDevoluciones"
        )
        return {
            props: {
                Devoluciones,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                Devoluciones: [], // Puedes proporcionar un valor predeterminado en caso de error.
            },
        };
    }
};