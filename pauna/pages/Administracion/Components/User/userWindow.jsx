import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";


export default function UserWindow() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="xl:w-full xl:grid xl:grid-cols-2
            lg:w-full lg:grid lg:grid-cols-1 
            p-36 
            text-3xl font-semibold ">
                <div className="bg-[#D9D9D9] text-center mx-10 rounded
                lg:mb-4">
                    <h1 className="text-white p-10">Agrega un administrador</h1>
                    <div className="p-2
                    lg:p-0">
                        <input className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
                            placeholder="Código">
                        </input>
                    </div>
                    <div className="p-2
                    lg:p-0">
                        <input className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
                            placeholder="Primer Nombre">
                        </input>
                    </div>
                    <div className="p-2
                    lg:p-0">
                        <input className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
                            placeholder="Segundo Nombre*">
                        </input>
                    </div>
                    <div className="p-2
                    lg:p-0">
                        <input className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
                            placeholder="Primer Apellido">
                        </input>
                    </div>
                    <div className="p-2
                    lg:p-0">
                        <input className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
                            placeholder="Segundo Apellido">
                        </input>
                    </div>
                    <div className="p-2
                    lg:p-0">
                        <select className="bg-white text-[#D9D9D9] text-center placeholder:text-[#D9D9D9] rounded"
                            >
                            <option className=" text-[#D9D9D9] text-center" disabled>Elige una ubicacion</option>
                            <option className=" text-[#D9D9D9] text-center" value="Administrador">Administrador</option>
                            <option className="text-[#D9D9D9] text-center" value="Usuario">Usuario</option>
                        </select>
                    </div>
                    <Link href="../../../../Administracion/page">
                    <div className="p-2 mt-5">
                        <button className="bg-[#3726FD] p-2 text-white rounded">
                            Añadir
                        </button>
                    </div>
                    </Link>


                </div>
                <div className="bg-[#D9D9D9] rounded text-center items-center justify-center mx-10 p-2">
                    <h1 className="text-white p-5">Lista de Administradores</h1>
                    <div class="overflow-x-auto">
                    <table class="table-fixed w-full mt-4">
                        <thead class="text-sm md:text-2xl">
                            <tr class="bg-white text-black md:pr-40 md:pl-40
                            lg:text-xs
                            xl:text-2xl">
                                <th class="p-4">Cédula</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="sm:text-sm sm:p-4
                                " >
                                <td className="
                                    bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>

                            </tr>
                            <tr>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                                <td className="bg-[#D9D9D9] p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                                <td className="bg-[#989898] p-7">
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="p-2">
                        <button className="bg-[#3726FD] p-2 text-white rounded">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

