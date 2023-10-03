import Link from "next/link"


export default function Report() {
    return (
        <div>
        
        <div class="text-center font-semibold text-white text-2xl grid grid-cols-1 sm:grid-cols-2">
            <Link href="../../../../Administracion/Components/Reports/Report">
            <button class="bg-[#4333F9] hover:bg-[#3726FD] p-4 sm:p-6 sm:mt-4 md:p-6 md:mt-4 mx-auto">
                Reportes
            </button>
            </Link>
            <Link href="../../../../Administracion/Components/Reports/MovReport">
            <button class="bg-[#4333F9] hover:bg-[#3726FD] p-4 sm:p-6 sm:mt-4 md:p-6 md:mt-4 mx-auto">
                Movimientos
            </button>
            </Link>
        </div>
        <div class="bg-[#021730] p-4 sm:p-8 rounded text-white text-2xl font-semibold sm:mx-10 sm:ml-10 sm:mt-5">
            <input class="bg-[#4333F9] hover:bg-[#3726FD] placeholder-text-white p-4 sm:p-6 sm:mt-4 md:p-6 md:mt-4
            placeholder:text-white" 
            type="text" placeholder="Buscar..." />
            <div class="overflow-x-auto mt-4">
                <table class="table-auto w-full">
                    <thead class="text-sm md:text-2xl bg-[#132335]">
                        <tr class=" text-white md:pr-4 md:pl-4">
                            <th class="p-4">Nombre</th>
                            <th>Código</th>
                            <th>Marca</th>
                            <th>Cantidad</th>
                            <th>Observaciones</th>
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

                        </tr>
                        <tr>
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
                            <td className="p-7">
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
                            <td className="p-7">
                            </td>
                            <td className=" p-7">
                            </td>
                            <td className="p-7">
                            </td>

                        </tr>
                        <tr>
                            <td className=" p-7">
                            </td>
                            <td className=" p-7">
                            </td>
                            <td className=" p-7">
                            </td>
                            <td className="p-7">
                            </td>
                            <td className="p-7">
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
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <button class="bg-[#4333F9] hover:bg-[#3726FD] p-4 sm:p-6 sm:mt-4 md:p-6 md:mt-4">
                Generar
            </button>
        </div>
        
    </div>


    )
}