import Link from "next/link"

export default function MovReport() {
    return (
        <>
            <div class="text-center font-semibold text-white text-2xl grid grid-cols-2">
                <div class="">
                    <Link href="../../../Administracion/Components/Reports/Report">
                        <button class="bg-[#4333F9] hover:bg-[#3726FD] sm:p-6 sm:mt-4 md:p-6 md:mt-4">
                            Reportes
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="../../../../Administracion/Components/Reports/MovReport">
                        <button class="bg-[#4333F9] hover:bg-[#3726FD] sm:p-6 sm:mt-4 md:p-6 md:mt-4">
                            Movimientos
                        </button>
                    </Link>
                </div>
            </div>
            <div class="bg-[#021730] p-8 rounded text-white text-2xl font-semibold sm:mx-10 sm:mt-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                    <input class="bg-[#4333F9] hover:bg-[#3726FD] placeholder:text-white sm:p-6 sm:mt-4 md:p-6 md:mt-4" type="date" placeholder="Fecha Inicio"></input>
                    <input class="bg-[#4333F9] hover:bg-[#3726FD] placeholder:text-white sm:p-6 sm:mt-4 md:p-6 md:mt-4" type="date" placeholder="Fecha Final"></input>
                </div>

                <div class="overflow-x-auto">
                    <table class="table-fixed w-full mt-4">
                        <thead class="text-sm md:text-2xl bg-[#132335]">
                            <tr class=" text-white md:pr-40 md:pl-40">
                                <th class="p-4">Movimiento</th>
                                <th>Fecha</th>
                                <th>Material</th>
                                <th>Marca</th>
                                <th>Cantidad</th>
                                <th>Rebajo</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#212C39]">
                            <tr className="sm:text-sm sm:p-4
                                " >
                                <td className="
                                     p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className="p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className="p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-7">
                                </td>
                                <td className="p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className="p-7">
                                </td>

                            </tr>
                            <tr>
                                <td className=" p-7">
                                </td>
                                <td className="p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className="p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                            </tr>
                            <tr>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                                <td className=" p-7">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button class="bg-[#4333F9] hover:bg-[#3726FD] sm:p-6 sm:mt-4 md:p-6 md:mt-4">
                    Buscar
                </button>
            </div>
        </>

    )
}