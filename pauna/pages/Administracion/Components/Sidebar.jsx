import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import UserWindow from "./userWindow"

import Logo from '../../../public/LOGO-UNA.png';
import User from '../../../public/usuario.png';
import Inventory from '../../../public/Inventario.png';

import Close from '../../../public/cerrarSesion.png'


export default function Sidebar() {
    const [open, setOpen] = useState(true)
    const [window, setWindow] = useState(true)

    return (
        <>
            <div className={`bg-[#4333F9] fixed top-0 left-0 pt-10 rounded-r-lg duration-300 ${open ? "w-80" : "w-20"}`}>
                <div className={`w-10 h-10 bg-white border border-[#4333F9] rounded-full absolute -right-5 top-3 flex items-center 
                justify-center
                $`}
                    onClick={() => setOpen(!open)}>
                    <p className="text-3xl">&#8801;</p>
                </div>
                <div className="text-center text-black text-2xl font-semibold">
                    <div className="flex items-center">
                        <div class="w-28 h-28 bg-[#0E21CD] rounded-full pd-10 flex items-center justify-center mx-4">
                        <Image src={Logo} width={30} height={30}  className="md:w-10/12"></Image>
                            
                        </div>
                        <div className={`text-white ml-3 ${!open && "hidden"}`}>PAUNA</div>
                    </div>
                </div>
                <div className="pt-20">
                    <Link href='/Administracion\Components\userWindow' className="transition-opacity">
                        <div className=" hover:bg-white cursor-pointer py-10 mb-2 flex items-center" onClick={() => setWindow(!window)}>
                            <p className={`text-left text-black text-2xl font-semibold mx-5 ${!open && "hidden"}`}>Usuarios</p>
                            <Image src={User} width={30} height={30} className={`w-10 h-10 mx-auto`}></Image>


                        </div>
                    </Link>
                    <Link href='/Administracion\Components\Invetory'>
                        <div className=" hover:bg-white cursor-pointer py-10 mb-2 flex items-center">
                            <p className={`text-left text-black text-2xl font-semibold mx-5 ${!open && "hidden"}`}>Inventario</p>
                            <Image src={Inventory} width={30} height={30} className={`w-10 h-10 mx-auto`}></Image>
                        </div>
                    </Link>
                    <Link href='/Administracion\Components\Report'>
                        <div className=" hover:bg-white cursor-pointer py-10 mb-2 flex items-center">
                            <p className={`text-left text-black text-2xl font-semibold mx-5 ${!open && "hidden"}`}>Reportes</p>
                            <Image src={Close} width={30} height={30} className={`w-10 h-10 mx-auto`}></Image>

                        </div>
                    </Link>

                </div>
                <div className="text-left text-black text-2xl font-semibold py-40 mb-2 mx-4 flex items-center">
                    <p className={`text-left text-black text-2xl font-semibold mx-5 ${!open && "hidden"}`}>Cerrar Sesion</p>
                    <Image src={Close} width={30} height={30} className={`w-10 h-10 mx-auto`}></Image>
                </div>
            </div>

        </>

    )
}