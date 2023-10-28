import React, { useState } from 'react';
import axios from "axios";
import Image from 'next/image';
import Link from 'next/link';

export default function Horario({ Horarios }) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hola");
        const res = await axios
          .post("/api/config/admin", user)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    const [] = useState({
            HO_identificador: "",
            HO_fecha: "",
            HO_hora: "",
            HO_estado: "",
    });

    return (
        <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
            <table class="w-full text-center">
                <thead class=" text-[#ffffff] uppercase bg-[#132335]">
                    <tr>
                        <th scope="col" class="text-base px-6 py-3">
                            Hora
                        </th>
                        <th scope="col" class="text-base px-6 py-3">
                            Fecha
                        </th>
                        <th scope="col" class="text-base px-6 py-3">
                            Estado
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white h-36">
                        <th scope="row" className=" px-6 py-4 font-normal text-white whitespace-nowrap">
                            <input
                                type="text"
                                placeholder="Ejemplo: 10am"
                                className=" text-white w-full md:w-40 p-3 rounded-md h-12 bg-[#132335] text-base text-center placeholder-white border-2 border-[#132335]"
                            />
                        </th>
                        <td className="px-6 py-4 text-base text-white">
                            <input type="date" className="p-2 w-full rounded-md border-2 border-[#132335] bg-[#132335] h-12" />
                        </td>
                        <td className="px-6 py-4 text-white text-center">
                            <select className="p-2 w-full rounded-md text-center text-base h-12 border-2 border-[#132335] bg-[#132335]">
                                <option className="text-center " value="">-Seleccionar opción-</option>
                                <option value="opcion1">Disponible</option>
                                <option value="opcion2">No disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="bg-[#132335] border-b border-b-slate-900 h-12">
                        <th scope="row" className=" px-6 py-4 font-medium text-white whitespace-nowrap">
                        </th>
                        <td className="px-6 py-4 text-black text-base">
                        </td>
                        <td className="px-6 py-4 text-black text-center">
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/CreateHorario"}>
                <button className='text-base text-white border-white mt-6 ml-3 w-36 h-10 bg-[#132335] hover:bg-[#242d66]'>Crear</button>
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