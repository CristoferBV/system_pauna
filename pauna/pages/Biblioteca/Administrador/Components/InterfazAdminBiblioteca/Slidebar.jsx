
import React, { useState } from 'react';
import axios from "axios";
import Image from 'next/image';

export default function Slidebar ({ Dispositivos }) {

    const [] = useState({
        TP_nombre: "",
        AO_descripcion: "",
        AO_estado: "",
        EA_nombre: "",
      });

    return (
            <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
                <div className="relative overflow-x-auto shadow-md bg-[#041A34] overflow-y-auto  min-h-[calc(100vh-64px)]">
                    <table className="w-full text-sm text-center text-[#757373]">
                        <thead className="text-xs text-[#ffffff] uppercase bg-[#132335]">
                            <tr>
                                <th scope="col" className="px-6 py-3    ">
                                    Dispositivo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Perifericos
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descripcion
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Estado
                                </th>
                                <th scope="col" className="px-6 py-3 w-20">
                                    Administrar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Dispositivos.map((Dispositivos) => (
                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group" key={Dispositivos.TP_nombre}>
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    {Dispositivos.TP_nombre}
                                </th>
                                <td className="px-6 py-4 text-white">
                                    {Dispositivos.EA_nombre}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Dispositivos.AO_descripcion}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {Dispositivos.AO_estado}
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
        );
    }

    export const getServerSideProps = async (context) => {
        try{
          const { data: Dispositivos } = await axios.get(
            "http://localhost:3000/api/config/admin"
          )
          return {
            props: {
                Dispositivos,
            },
          };
        }catch(error){
          console.log(error)
        }
      };