import { useState } from "react";
import SidebarBiblioAdmin from "./InterfazAdminBiblioteca/SidebarBiblioAdmin";


export default function Layout({ children }) {
    const [sideOpen,setSideOpen] = useState(true)
    return (
        <>
        <div className="flex bg-[#041A34]">
            <SidebarBiblioAdmin isOpen={sideOpen} toggleSidebar={()=> setSideOpen(!sideOpen)}/>
            <div className={`flex-grow ${sideOpen ? "w-3/4 ml-72 duration-300 mx-auto": "w-full duration-300 ml-12"}`}>
            {children}
            </div>
        </div>
        </>
    )
}