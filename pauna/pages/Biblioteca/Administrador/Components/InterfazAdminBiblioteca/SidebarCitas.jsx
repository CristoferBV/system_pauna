import React, { useState } from 'react';
import axios from "axios";
import Image from 'next/image';

export default function SidebarCitas({ Citas }) {

    const [] = useState({
        LP_identificador: "",
        HO_fecha: "",
        HO_hora: "",
        UO_primer_nombre: "",
        UO_identificador: "",
        CA_nombre: "",
        TP_nombre: "",
    });

    return (
        <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
            <table class="w-full text-sm text-center text-[#757373]">
                <thead class="text-xs text-[#ffffff] uppercase bg-[#132335]">
                    <tr>
                        <th scope="col" class="px-10 py-3">
                            Fecha
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Hora
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cedula
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Carrera
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dispositivo
                        </th>
                        <th scope="col" class="px-6 py-3 w-20">
                            Administrar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Citas.map((Citas) => (

                        <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group" key={Citas.LP_identificador}>
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                {Citas.HO_fecha}
                            </th>
                            <td className="px-6 py-4 text-white">
                                {Citas.HO_hora}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Citas.UO_primer_nombre}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Citas.UO_identificador}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Citas.CA_nombre}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Citas.TP_nombre}
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
    );
}

export const getServerSideProps = async (context) => {
    try {
        const { data: Citas } = await axios.get(
            "http://localhost:3000/api/config/BibliotecaCitas"
        )
        return {
            props: {
                Citas,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                Citas: [], // Puedes proporcionar un valor predeterminado en caso de error.
            },
        };
    }
};