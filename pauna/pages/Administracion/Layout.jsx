import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";


export default function Layout({ children }) {
    const [sideOpen,setSideOpen] = useState(true)
    return (
        <>
        <div className="flex ">
            <Sidebar isOpen={sideOpen} toggleSidebar={()=> setSideOpen(!sideOpen)}/>
            <div className={`flex-grow ${sideOpen ? "w-3/4 ml-72 duration-300 mx-auto": "w-full duration-300 ml-12"}`}>
            {children}
            </div>
        </div>
        </>
    )
}