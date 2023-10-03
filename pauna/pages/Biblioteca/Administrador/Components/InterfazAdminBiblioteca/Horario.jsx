import React, { useState } from 'react';
import axios from "axios";
import Image from 'next/image';
import Link from 'next/link';

export default function Horario({ Horarios }) {

    const [] = useState({
        HO_identificador: "",
        HO_fecha: "",
        HO_hora: "",
        HO_estado: "",
    });

    return (
        <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
            <table class="w-full text-sm text-center text-[#757373]">
                <thead class="text-xs text-[#ffffff] uppercase bg-[#132335]">
                    <tr>
                        <th scope="col" class="px-6 py-3    ">
                            Hora
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fecha
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" class="px-6 py-3 w-20">
                            Administrar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Horarios.map((Horarios) => (

                        <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group" key={Horarios.HO_identificador}>
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                {Horarios.HO_fecha}
                            </th>
                            <td className="px-6 py-4 text-white">
                                {Horarios.HO_hora}
                            </td>
                            <td className="px-6 py-4 text-white">
                                {Horarios.HO_estado}
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
             <Link href={"/LoginAndRegister/Login/Login/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/CreateHorario"}>
             <button className=' text-white border-white text-sm mt-6 ml-3 w-36 h-10 bg-[#132335] hover:bg-[#242d66]'>Crear Horario</button>
             </Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    try {
        const { data: Horarios } = await axios.get(
            "http://localhost:3000/api/config/BibliotecaHorario"
        )
        return {
            props: {
                Horarios,
            },
        };
    } catch (error) {
        console.log(error)
    }
};