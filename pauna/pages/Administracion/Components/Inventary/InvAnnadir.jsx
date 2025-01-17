import Random from "../../../../public/cambio.png"
import Image from 'next/image';

export default function Annadir() {
    return (
        <div className="bg-white min-h-screen">
            <div className="sm:bg-white] sm:p-40
            md:bg-white 
            lg:bg-white 
            bg-white ">
                <div className="text-center text-2xl font-semibold content-center justify-center grid grid-cols-2 w-[90rem]
                sm:bg-white sm:mx-auto sm:p-10 sm:grid-cols-1 sm:rounded
                md:bg-white md:mx-auto md:p-5 md:grid-cols-2  md:rounded
                bg-white">
                    <div className="bg-[#021730] rounded-lg w-3/5 text-white
                    sm:p-10 sm:grid sm:grid-cols-1
                    md:p-5">
                        <div className="grid grid-cols-1 divide-y
                    sm:p-5
                    md:p-5
                    ">
                            <label className="">
                                Código
                            </label>
                            <input className="text-center rounded-t-lg
                        bg-white"  type="text"></input>
                            <button className="bg-[#4333F9] flex items-center justify-center rounded-b-lg">
                                <Image src={Random} width={30} height={30} className=""></Image>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 divide-y
                    sm:p-5
                    md:p-5">
                            <label className="">
                                Nombre
                            </label>
                            <input className="text-center rounded
                        bg-white"  type="text"></input>
                        </div>
                        <div className="grid grid-cols-1 divide-y
                    sm:p-5
                    md:p-5">
                            <label className="">
                                Observación
                            </label>
                            <input className="text-center rounded p-5
                        bg-white"  type="text"></input>
                        </div>
                        <div className="grid grid-cols-1 divide-y 
                    sm:p-5
                    md:p-5">
                            <label className="">
                                Marca
                            </label>
                            <select className="text-center rounded
                        bg-white">
                                <option disabled>
                                    Elige una marca
                                </option>
                                <option>
                                    Bic
                                </option>
                                <option>
                                    Norma
                                </option>
                                <option>
                                    Crayola
                                </option>
                                <option>
                                    Sharpie
                                </option>
                                <option>
                                    Post-it
                                </option>
                                <option>
                                    Paper Mater
                                </option>
                            </select >
                        </div>

                        <div className="grid grid-cols-1 divide-y
                    sm:p-5
                    md:p-5">
                            <label className="">
                                Ubicación
                            </label>
                            <select className="text-center rounded
                        bg-white">
                                <option disabled>
                                    Elige una ubicacion
                                </option>
                                <option value="superior">
                                    Superior
                                </option>
                                <option value="inferior">
                                    Inferior
                                </option>
                                <option value="auditorio">
                                    Auditorio
                                </option>
                            </select >
                            <button className="bg-[#4333F9] rounded text-white
                        sm:m-4 sm:p-2
                        md:m-4 md:p-2">
                                Añadir
                            </button>
                        </div>

                    </div>


                    <div className="bg-[#021730] grid-cols-3 divide-y rounded p-5 w-3/5
                    sm:ml-[21rem]
                    md:ml-auto">
                        <div className="bg-white rounded grid grid-cols-1 divide-x w-200
                        sm:m-4
                        md:m-4">
                            <label>
                                Marca
                            </label>
                            <input className="text-center rounded
                        bg-[#D9D9D9]
                        sm:m-4" type="text"></input>
                            <label>
                                Descripción
                            </label>
                            <input className="text-center rounded
                        bg-[#D9D9D9]
                        sm:m-4" type="text"></input>
                            <button className="bg-[#4333F9] rounded text-white
                        sm:m-4 sm:p-2
                        md:m-4 md:p-2">
                                Añadir
                            </button>
                        </div>
                        <div className="bg-white rounded grid grid-cols-1 divide-x
                        sm:m-4 
                        md:m-4">
                            <label>
                                Color
                            </label>
                            <input className="text-center rounded
                        bg-[#D9D9D9]
                        sm:m-4" type="text"></input>
                            <button className="bg-[#4333F9] rounded text-white
                        sm:m-4 sm:p-2
                        md:m-4 md:p-2">
                                Añadir
                            </button>
                        </div>

                        <div className="bg-white rounded grid grid-cols-1 divide-x
                        sm:m-4 
                        md:m-4">
                            <label>
                                Ubicación
                            </label>
                            <input className="text-center rounded
                        bg-[#D9D9D9]
                        sm:m-4" type="text"></input>
                            <label>
                                Descripción
                            </label>
                            <input className="text-center rounded
                        bg-[#D9D9D9]
                        sm:m-4" type="text"></input>
                            <button className="bg-[#4333F9] rounded text-white
                        sm:m-4 sm:p-2
                        md:m-4 md:p-2">
                                Añadir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

