import Buttons from "./InvButtons";
import Sidebar from "./Sidebar";


export default function Inventary() {


    return (
        <aside>
            <div className="bg-white sm:bg-white md:bg-white lg:bg-white xl:bg-white">
                <div className="grid grid-cols-3 sm:grid-cols-1 sm:text-center 
                m:min-h-min p-10 md:flex items-center justify-center text-white text-2xl font-semibold">
                    <div className="sm:m-4
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
                md:p-20 rounded-lg text-2xl font-semibold">
                    <div className="sm:mr-10 sm:text-center sm:p-2 sm:text-sm
                    md:mr-20 md:text-left md:mx-auto md:text-2xl">
                        <input className="bg-[#3726FD] p-2 text-white placeholder-white rounded-lg" placeholder="Buscar...">
                        </input>
                    </div>
                    <div className="xl:pt-10 xl:mr-50 lg:pt-5 lg:mr-40">
                        <table class="table-fixed w-full">
                            <thead className="sm:text-sm
                            md:mx-auto md:text-2xl">
                                <tr className="
                                md:pr-40 md:pl-40">
                                    <th className="
                                    ">
                                        Nombre
                                    </th>
                                    <th>
                                        Codigo
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
                                    <Buttons/>
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
                                    <Buttons/>
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
                                    <Buttons/>
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
                                    <Buttons/>
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
                                    <Buttons/>
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
                                    <Buttons/>
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
                                    <Buttons/>
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
                                    <Buttons/>
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
                                    <Buttons/>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pt-20 text-white text-left">
                        <button className="bg-[#3726FD] md:w- p-5 rounded-lg hover:bg-[#4333F9]">
                            Annadir
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}