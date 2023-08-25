import { useState } from "react";
import Sidebar from "./Sidebar";


export default function UserWindow() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="bg-[#D9D9D9] h-screen">
                <div className="bg-white text-center text-2xl font-semibold w-max h-max p-4 rounded-lg ">
                    <div className={`bg-black text-center flex items-center justify-center`}>
                        <label className={` text-center absolute ${open && "hidden"}`}>Cedula</label>
                        <input className="bg-[#989898] rounded-lg" type="text" onClick={()=>setOpen(!open)}></input>
                    </div>
                    <div className={`bg-black text-center flex items-center justify-center`}>
                        <label className="text-white text-center absolute">Primer Nombre</label>
                        <input className="bg-[#989898] rounded-lg" type="text"></input>
                    </div>
                    <div className={`bg-black text-center flex items-center justify-center`}>
                        <label className="text-white text-center absolute">Segundo Nombre</label>
                        <input className="bg-[#989898] rounded-lg" type="text"></input>
                    </div>
                    <div className={`bg-black text-center flex items-center justify-center`}>
                        <label className="text-white text-center absolute">Primer Apellido</label>
                        <input className="bg-[#989898] rounded-lg" type="text"></input>
                    </div>
                    <div className={`bg-black text-center flex items-center justify-center`}>
                        <label className="text-white text-center absolute">Segundo Apellido</label>
                        <input className="bg-[#989898] rounded-lg" type="text"></input>
                    </div>
                    <div className={`bg-black text-center flex items-center justify-center`}>
                        <label className="text-white text-center absolute"></label>
                        <select className="bg-[#989898] rounded-lg" type="">
                            <option value="manzana">Administrador</option>
                            <option value="man">Ad</option>
                        </select>
                    </div>
                </div>
            </div>
            
        </>





    )
}

