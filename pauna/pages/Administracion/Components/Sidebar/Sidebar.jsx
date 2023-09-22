import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import Logo from '../../../../public/LOGO-UNA.png';
import User from '../../../../public/usuario.png';
import Inventory from '../../../../public/Inventario.png';
import Close from '../../../../public/cerrarSesion.png';


export default function Sidebar({ isOpen, toggleSidebar }) {
    const [active, setActive] = useState(0);
    return (
        <>
            {/*------------------------- Parte hecha por sebas viejo SideBar--------------------------*/}

            {/* <div className={`bg-[#4333F9] fixed top-0 left-0 pt-10 rounded-r-lg duration-400 h-screen
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
                </div> */}


            {/*------------------------- Parte hecha por Andrey Nuevo SideBar--------------------------*/}
            <div className="lg:w-1/5 bg-[#021730] shadow-inner text-white min-h-screen overflow-y-auto fixed left-0 top-0 bottom-0">
                <div className="text-center text-2xl font-semibold mt-6">
                    <div className="flex items-center">
                        <div className="w-20 h-20 bg-[#0E21CD] rounded-full flex items-center justify-center mx-4 mt-4">
                            <Image src="/LOGO-UNA1-Blanco 2.png" alt="logo universidad nacional de costa rica" width={80} height={80} />
                        </div>
                        <div className="text-white ml-2 mt-4">PAUNA</div>
                    </div>
                </div>
                <ul className="flex-grow mt-10 space-y-4">
                    <Link href={"/Administracion/Components/User/userWindow"}>
                        <li className="py-4 pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika">Usuarios</span>
                        </li>
                    </Link>
                    <Link href={'/Administracion/Components/Inventary/Inventory'}>
                        <li className="py-4 pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika">Inventario</span>
                        </li>
                    </Link>
                    <Link href={'/Administracion/Components/Reports/Report'}>
                        <li className="py-4 pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika">Reportes</span>

                        </li>
                    </Link>
                    <Link href={"/LoginAndRegister/Login/Login"}>
                        <li>
                            <button className='rounded-xl ml-16 text-white border-white mt-32 w-32 h-10 bg-[#132335] hover:bg-[#c43f3f]'>Cerrar Cesion</button>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
}