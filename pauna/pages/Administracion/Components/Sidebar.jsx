import { useState } from "react"
import UserWindow from "./userWindow"


export default function Sidebar() {
    const [open, setOpen] = useState(true)
    const [window, setWindow] = useState(true)

    return (
        <>
        <div className={`bg-[#4333F9] h-screen fixed top-0 left-0 pt-10 rounded-r-lg duration-300 ${open ? "w-80" : "w-20"}`}>
            <div className={`w-10 h-10 bg-white border border-[#4333F9] rounded-full absolute -right-5 top-3 flex items-center 
                justify-center
                $`}
                onClick={() => setOpen(!open)}>
                <p className="text-3xl">&#8801;</p>
            </div>
            <div className="text-center text-black text-2xl font-semibold">
                <div className="flex items-center">
                    <div class="w-28 h-28 bg-[#0E21CD] rounded-full pd-10 flex items-center justify-center mx-4">
                        <img src="LOGO.png"
                            alt="logo universidad nacional de costa rica" className="" />
                    </div>
                    <div className={`text-white ml-3 ${!open && "hidden"}`}>PAUNA</div>
                </div>
            </div>
            <div className="pt-20">
                <div className=" hover:bg-white cursor-pointer py-10 mb-2 flex items-center" onClick={() => setWindow(!window)}>
                    <p className={`text-left text-black text-2xl font-semibold mx-5 ${!open && "hidden"}`}>Usuarios</p>

                    <img src="usuario.png"
                        alt="logo de usuarios" className={`w-10 h-10 mx-auto`} />
                </div>
                <div className=" hover:bg-white cursor-pointer py-10 mb-2 flex items-center">
                    <p className={`text-left text-black text-2xl font-semibold mx-5 ${!open && "hidden"}`}>Inventario</p>
                    <img src="Inventario.png"
                        alt="logo de inventario" className={`w-10 h-10 mx-auto`} />
                </div>
                <div className=" hover:bg-white cursor-pointer py-10 mb-2 flex items-center">
                    <p className={`text-left text-black text-2xl font-semibold mx-5 ${!open && "hidden"}`}>Reportes</p>
                    <img src="cerrarSesion.png"
                        alt="logo de inventario" className={`w-10 h-10 mx-auto`} />

                </div>

            </div>
            <div className="text-left text-black text-2xl font-semibold py-40 mb-2 mx-4 flex items-center">
                <p className={`text-left text-black text-2xl font-semibold mx-5 ${!open && "hidden"}`}>Cerrar Sesion</p>
                <img src="cerrarSesion.png"
                    alt="logo de inventario" className="w-10 h-10  mx-auto" />
            </div>
        </div>
        
        </>

    )
}