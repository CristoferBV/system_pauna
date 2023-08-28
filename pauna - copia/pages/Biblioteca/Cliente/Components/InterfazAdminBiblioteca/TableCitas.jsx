import React from 'react'

const TableCitas = () => {
    return (
        <div className="flex-1 p-8 h-full flex flex-col bg-[#041A34]">
            <div className="relative overflow-x-auto shadow-md bg-[#041A34]">
                <table class="w-full text-sm text-center text-[#ffffff] dark:text-[#ffffff]">
                    <thead class="text-xs text-[#ffffff] uppercase bg-[#132335] dark:text-[#041A34] dark:bg-[#041A34]">
                        <tr>
                            <th scope="col" class="px-6 py-3    ">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Hora
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Lunes
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Martes
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Miercoles
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Jueves
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Viernes
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Administrar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4 text-white">
                                10am
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Carlos Godines
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                David Hernadez
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4 text-white">
                                10am
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">
                                Carlos Godines
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                David Hernadez
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4 text-white">
                                10am
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Carlos Godines
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4 text-white">
                                10am
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66] group">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4 text-white">
                                10am
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">
                                David Hernadez
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4 text-white">
                                10am
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">
                                David Hernadez
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4 text-white">
                                10am
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">
                                Carlos Godines
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                David Hernadez
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4 text-white">
                                10am
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey Barrios
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="px-6 py-4 text-white">
                                Carlos Godines
                                Cedula:118080476
                                Carrera:Ingenieria
                                Beca Luis Felipe
                                Asiganda:Laptop N00NJKLS3
                            </td>
                            <td class="px-6 py-4 text-white">

                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableCitas