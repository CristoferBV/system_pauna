import { useState } from "react";
import Sidebar from "./Sidebar";


export default function UserWindow() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Sidebar/>

        
        <div className="bg-white">
            <div className="grid grid-cols-2 bg-[#D9D9D9] md:mx-40 p-20 rounded-lg">
                <div className="sm:w-1/2 p-4">
                    <div className="md:m-20 md:w-10 h-10">
                        <div className="bg-white text-center text-2xl font-semibold w-max h-max p-10 rounded-lg ">
                            <div className={`bg-white text-center flex items-center justify-center p-5`}>
                                <label className={`text-white text-center absolute ${open && "hidden"}`}>Cedula</label>
                                <input className="bg-[#989898] rounded-lg p-5" type="text" onClick={() => setOpen(!open)}></input>
                            </div>
                            <div className={`bg-white text-center flex items-center justify-center p-5`}>
                                <label className="text-white text-center absolute">Primer Nombre</label>
                                <input className="bg-[#989898] rounded-lg p-5" type="text"></input>
                            </div>
                            <div className={`bg-white text-center flex items-center justify-center p-5`}>
                                <label className="text-white text-center absolute">Segundo Nombre</label>
                                <input className="bg-[#989898] rounded-lg p-5" type="text"></input>
                            </div>
                            <div className={`bg-white text-center flex items-center justify-center p-5`}>
                                <label className="text-white text-center absolute">Primer Apellido</label>
                                <input className="bg-[#989898] rounded-lg p-5" type="text"></input>
                            </div>
                            <div className={`bg-white text-center flex items-center justify-center p-5`}>
                                <label className="text-white text-center absolute">Segundo Apellido</label>
                                <input className="bg-[#989898] rounded-lg p-5" type="text"></input>
                            </div>
                            <div className={`bg-white text-center flex items-center justify-center p-5`}>
                                <label className="text-white text-center absolute"></label>
                                <select className="bg-[#989898] rounded-lg p-5 text-white text-center w-full" type="">
                                    <option className=" text-white text-center" disabled>Rol</option>
                                    <option className=" text-white text-center" value="Administrador">Administrador</option>
                                    <option className="text-white text-center" value="Usuario">Usuario</option>
                                </select>
                            </div>
                            <div className={`bg-[#3726FD] text-center flex items-center justify-center hover:bg-[#4333F9]
                    rounded-lg p-5`}>
                                <label className="text-white text-center absolute">Annadir</label>
                                <input className="bg-[#989898] rounded-lg" type="button"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 p-4">
                    <div className="sm:h-screen p-20">
                        <div className="bg-white text-center text-2xl font-semibold w-max h-max p-20 rounded-lg">
                            <div className="flex items-center justify-center pb-20">
                                <label className="text-3xl text-center text-black">
                                    Administradores
                                </label>
                            </div>
                            <div className="flex items-center justify-center w-80">
                                <table class="w-full">
                                    <thead>
                                        <tr className="">

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="" >
                                            <td className="bg-[#989898] p-7 rounded-t-lg">
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td className="bg-[#D9D9D9] p-7">

                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td className="bg-[#989898] p-7">

                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td className="bg-[#D9D9D9] p-7">

                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td className="bg-[#989898] p-7">

                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td className="bg-[#D9D9D9] p-7">

                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td className="bg-[#989898] p-7 rounded-b-lg">

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={`mt-10 bg-[#3726FD] text-center flex items-center justify-center hover:bg-[#4333F9]
                    rounded-lg p-2 `}>
                                <label className="text-white text-center absolute">Eliminar</label>
                                <input className="bg-[#989898] rounded-lg" type="button"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

