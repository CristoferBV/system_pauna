'useclient'
import Buttons from "./InvButtons";
import Link from "next/link"


export default function Inventary() {
    return (
        <>
            <div className="bg-white sm:bg-white md:bg-white lg:bg-white xl:bg-white">
                <div className="grid grid-cols-3 sm:grid-cols-1 sm:text-center 
                m:min-h-min p-10 md:flex items-center justify-center text-white text-2xl font-semibold
                lg:p-2 ">
                    <div className="
                    sm:m-4
                    md:mr-10">
                        <button className="bg-[#3726FD] md:w-auto p-5 rounded-lg hover:bg-[#4333F9]">
                            Superior
                        </button>
                    </div>
                    <div className="sm:m-4
                    md:mr-10">
                        <button className="bg-[#3726FD] md:w-auto p-5 rounded-lg hover:bg-[#4333F9]">
                            Inferior
                        </button>
                    </div>
                    <div className="sm:m-4
                    md:mr-10">
                        <button className="bg-[#3726FD] md:w-auto p-5 rounded-lg hover:bg-[#4333F9]">
                            Auditorio
                        </button>
                    </div>
                </div>

                <div className="bg-[#D9D9D9] w-3/4 mx-40 text-center
                md:p-20 rounded-lg text-2xl font-semibold
                lg:text-lg">
                    <div className="sm:mr-10 sm:text-center sm:p-2 sm:text-sm
                    md:mr-20 md:text-left md:mx-auto md:text-xs
                    lg:text-xl">
                        <input className="bg-[#3726FD] p-5 text-white placeholder-white rounded-lg" placeholder="Buscar...">
                        </input>
                    </div>
                    <div className="xl:pt-10 xl:mr-50 
                    lg:pt-5 lg:mx-auto lg:text-xs">
                        <table className="table-fixed 
                        lg:w-full">
                            <thead className="sm:text-sm
                            md:mx-auto md:text-xs
                            lg:text-base
                            xl:text-2xl
                            ">
                                <tr className="xl-text-2xl 
                                md:pr-40 md:pl-40 md:text-md
                                ">
                                    <th className="
                                    ">
                                        Nombre
                                    </th>
                                    <th>
                                        Código
                                    </th>
                                    <th>
                                        Marca
                                    </th>
                                    <th>
                                        Cantidad
                                    </th>
                                    <th>
                                        Observaciones
                                    </th>
                                    <th>

                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr className="
                                md:text-xs md:text-white
                                lg:text-xs lg:m-auto lg:p-auto
                                xl:p-2 xl:text-xl
                                2xl:p-4 2xl:text-2xl" >
                                    <td className="
                                    bg-[#989898]">
                                        
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td><Buttons /></td>
                                </tr>
                                <tr className="
                                md:text-xs md:text-white
                                lg:text-xs lg:m-auto lg:p-1
                                xl:p-2 xl:text-xl
                                2xl:p-4 2xl:text-2xl"> 
                                    <td className="bg-[#D9D9D9]">
                                    </td>
                                    <td className="bg-[#D9D9D9]">
                                    </td>
                                    <td className="bg-[#D9D9D9]">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9]">
                                    </td>
                                    <td><Buttons /></td>
                                </tr>
                                <tr className="
                                md:text-xs md:text-white
                                lg:text-xs lg:m-auto lg:p-1
                                xl:p-2 xl:text-xl
                                2xl:p-4 2xl:text-2xl">
                                    <td className="bg-[#989898]">
                                    </td>
                                    <td className="bg-[#989898]">
                                    </td>
                                    <td className="bg-[#989898]">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td><Buttons /></td>
                                </tr>
                                <tr>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td><Buttons /></td>
                                </tr>
                                <tr>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td><Buttons /></td>
                                </tr>
                                <tr>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td><Buttons /></td>
                                </tr>
                                <tr>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td><Buttons /></td>

                                </tr>
                                <tr>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td className="bg-[#D9D9D9] ">
                                    </td>
                                    <td><Buttons /></td>
                                </tr>
                                <tr>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td className="bg-[#989898] ">
                                    </td>
                                    <td><Buttons /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Link href="../../../../Administracion/Components/Inventary/InvAnnadir">
                        <div className="pt-20 text-white text-left">
                            <button className="bg-[#3726FD] md:w- p-6 rounded-lg hover:bg-[#4333F9]">
                                Añadir
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}