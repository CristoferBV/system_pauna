import React, { useState } from 'react';
import Image from 'next/image';

const Slidebar = () => {

    return (
            <div className="flex-1 p-8 bg-[#041A34] overflow-x-auto shadow-md min-h-screen">
                <div className="relative overflow-x-auto shadow-md bg-[#041A34] overflow-y-auto  min-h-[calc(100vh-64px)]">
                    <table className="w-full text-sm text-center text-[#757373]">
                        <thead className="text-xs text-[#ffffff] uppercase bg-[#132335]">
                            <tr>
                                <th scope="col" className="px-6 py-3    ">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tablet
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Laptop
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Perifericos
                                </th>
                                <th scope="col" className="px-6 py-3 w-20">
                                    Administrar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Samsung A5
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i5
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Huawei 10S
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i7
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Audifonos
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    3
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Samsung A5
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i5
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    4
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Huawei AS
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i3
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Estuche
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    5
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Samsung A5
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i5
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    6
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Samsung A5
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i5
                                </td>
                                <td className="px-6 py-4 text-white">
                                    audifonos
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    7
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Huawei SU
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i9
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador y audifonos
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    8
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Huawei SU
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i9
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador y audifonos
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    9
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Huawei SU
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i9
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador y audifonos
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    10
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Huawei SU
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i9
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador y audifonos
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#212C39] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    11
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Huawei SU
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i9
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador y audifonos
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#212C39] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#132335] border-b hover:bg-[#242d66] group">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    12
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Huawei SU
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop i9
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Cargador y audifonos
                                </td>
                                <td className="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/add-icon.png" alt="logo universidad nacional de costa rica" width={30} height={30} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/delete-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                    <button className='bg-[#132335] text-white group-hover:bg-[#242d66] ml-2'><Image src="/edit-icon.png" alt="logo universidad nacional de costa rica" width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default Slidebar