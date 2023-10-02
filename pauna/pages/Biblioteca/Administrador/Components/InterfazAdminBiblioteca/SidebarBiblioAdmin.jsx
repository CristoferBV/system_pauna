import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <>
            <div className="lg:w-1/5 bg-[#021730] shadow-inner text-white min-h-screen overflow-y-auto fixed left-0 top-0 bottom-0">
                <div className="text-center text-2xl font-semibold mt-6">
                    <div className="flex items-center">
                        <div className="w-20 h-20 bg-[#0E21CD] rounded-full flex items-center justify-center mx-4 mt-4">
                            <Image src="/LOGO-UNA1-Blanco 2.png" alt="logo universidad nacional de costa rica" width={80} height={80} />
                        </div>
                        <div className="text-white ml-2 mt-4">PAUNA</div>
                    </div>
                </div>
                <ul className="flex-grow mt-4 lg:mt-10 space-y-2 lg:space-y-4">
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Dispositivos</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Citas</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarEstudiantes"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Estudiantes</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarDevoluciones"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Devoluciones</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarReporte"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Reporte</span>
                        </li>
                    </Link>
                    <Link href={"/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarReporte"}>
                        <li className="py-2 lg:py-4 pl-4 lg:pl-20 transition ease-in-out delay-140 bg-[#021730] hover:bg-[#132335] hover:-translate-y-1 hover:scale-105 duration-200">
                            <span className="font-bold font-inika text-sm lg:text-base">Horario</span>
                        </li>
                    </Link>
                    <Link href={"/LoginAndRegister/Login/Login"}>
                        <li>
                            <button className='rounded-xl ml-2 lg:ml-16 text-white border-white lg:mt-20 w-24 lg:w-32 h-8 lg:h-10 bg-[#132335] hover:bg-[#c43f3f]'>Cerrar Sesión</button>
                        </li>
                    </Link>
                </ul>
            </div>
    </>
    );
}