import React, { useState } from 'react';
import axios from "axios";
import Image from 'next/image';

export default function Horario({ Horarios }) {


    return (
        <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
            
            <Link href={"/LoginAndRegister/Login/Login"}>
                <button className=' text-white border-white text-sm mt-6 ml-3 w-36 h-10 bg-[#132335] hover:bg-[#242d66]'>Crear Horario</button>
            </Link>
        </div>
    )
}