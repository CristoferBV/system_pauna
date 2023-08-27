import Sidebar from "./Sidebar";


export default function Report() {
    return (
        <div>
        
        <div class="text-center font-semibold text-white text-2xl grid grid-cols-1 sm:grid-cols-2">
            <button class="bg-[#4333F9] hover:bg-[#3726FD] rounded p-4 sm:p-6 sm:mt-4 md:p-6 md:mt-4">
                Reportes
            </button>
            <button class="bg-[#4333F9] hover:bg-[#3726FD] rounded p-4 sm:p-6 sm:mt-4 md:p-6 md:mt-4">
                Movimientos
            </button>
        </div>
        <div class="bg-[#D9D9D9] p-4 sm:p-8 rounded text-white text-2xl font-semibold sm:mx-10 sm:mt-5">
            <input class="bg-[#4333F9] hover:bg-[#3726FD] rounded placeholder-text-white p-4 sm:p-6 sm:mt-4 md:p-6 md:mt-4" type="text" placeholder="Buscar..." />
            <div class="overflow-x-auto mt-4">
                <table class="table-auto w-full">
                    <thead class="text-sm md:text-2xl">
                        <tr class="bg-white text-black md:pr-4 md:pl-4">
                            <th class="p-4">Nombre</th>
                            <th>Codigo</th>
                            <th>Marca</th>
                            <th>Cantidad</th>
                            <th>Observaciones</th>
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
                            <td className="bg-[#989898] p-7">
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <button class="bg-[#4333F9] hover:bg-[#3726FD] rounded p-4 sm:p-6 sm:mt-4 md:p-6 md:mt-4 sm:ml-7">
                Generar
            </button>
        </div>
        
    </div>


    )
}