import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import Logo from '../../../../public/LOGO-UNA.png';
import User from '../../../../public/usuario.png';
import Inventory from '../../../../public/Inventario.png';
import Close from '../../../../public/cerrarSesion.png';


export default function Sidebar({isOpen, toggleSidebar}) {
    const [active, setActive] = useState(0);
    return (
        <>
            <div className={`bg-[#4333F9] fixed top-0 left-0 pt-10 rounded-r-lg duration-400 h-screen
            lg:w-auto  lg:duration-400
            ${isOpen ? "w-80" : "w-20"}`}>
                <div className={`w-10 h-10 bg-white border border-[#4333F9] rounded-full absolute -right-5 top-3 flex items-center 
                justify-center
                $`}
                    onClick={() => toggleSidebar()}>
                    <p className="text-3xl">&#8801;</p>
                </div>
                <div className="text-center text-black text-2xl font-semibold
                ">
                    <div className="flex items-center">
                        <div class="w-28 h-28 bg-[#0E21CD] rounded-full pd-10 flex items-center justify-center mx-4">
                        <Image src={Logo} width={100} height={100}  className=""></Image>
                        </div>
                        <div className={`text-white ml-3 ${!isOpen && "hidden"}`}>PAUNA</div>
                    </div>
                </div>
                <div className="pt-20">
                    <Link href='/Administracion/Components/User/userWindow'>
                        <div className={`hover:bg-white cursor-pointer py-10 mb-2 flex items-center ${active === 1 && "bg-white"}`}
                        onClick={()=>setActive(1)}>
                            <p className={`text-left text-black text-2xl font-semibold mx-5 ${!isOpen  && "hidden"}`}>Usuarios</p>
                            <Image src={User} width={30} height={30} className={`w-10 h-10 mx-auto`}></Image>
                        </div>
                    </Link>
                    <Link href='/Administracion/Components/Inventary/Inventory'>
                        <div className={` hover:bg-white cursor-pointer py-10 mb-2 flex items-center${active === 2 && "bg-white"}`}
                        onClick={()=>setActive(2)}>
                            <p className={`text-left text-black text-2xl font-semibold mx-5 ${!isOpen  && "hidden"}`}>Inventario</p>
                            <Image src={Inventory} width={30} height={30} className={`w-10 h-10 mx-auto`}></Image>
                        </div>
                    </Link>
                    <Link href='/Administracion/Components/Reports/Report'>
                        <div className={`hover:bg-white cursor-pointer py-10 mb-2 flex items-center ${active === 3 && "bg-white"}`}
                        onClick={()=>setActive(3)}>
                            <p className={`text-left text-black text-2xl font-semibold mx-5 ${!isOpen  && "hidden"}`}>Reportes</p>
                            <Image src={Close} width={30} height={30} className={`w-10 h-10 mx-auto`}></Image>

                        </div>
                    </Link>

                </div>
                
                <Link href={"/LoginAndRegister/Login/Login"}>
                <div className=" cursor-pointer py-10 text-left text-black text-2xl font-semibold mb-2 mx-4 flex items-center mt-9
                ">
                    <p className={`text-left text-black text-2xl font-semibold mx-5 ${!isOpen  && "hidden"}`}>Cerrar Sesion</p>
                    <Image src={Close} width={30} height={30} className={`w-10 h-10 mx-auto`}></Image>
                </div>
                </Link>
                
                </div>
    </>
  );
}