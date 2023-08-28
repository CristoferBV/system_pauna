import React from 'react'

const TableEstudiantes = () => {
  return (
    <div className="flex-1 p-8 h-full flex flex-col bg-[#041A34]">
            <div className="relative overflow-x-auto shadow-md bg-[#041A34]">
                <table class="w-full text-sm text-center text-[#ffffff] dark:text-[#ffffff]">
                    <thead class="text-xs text-[#ffffff] uppercase bg-[#132335] dark:text-[#041A34] dark:bg-[#041A34]">
                        <tr>
                            <th scope="col" class="px-6 py-3    ">
                                Nombre
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cedula
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nivel
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Requiere
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Activo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Caracteristicas
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Perteneciente
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Otro Campus
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de prestamo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha Devolucion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha devuelto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Beca
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Observacion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Telefono
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ubicacion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Administrar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey Barrios Valverde
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                II
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                N0WER1
                            </td>
                            <td class="px-6 py-4 text-white">
                                i5 decima generacion
                                hp 2022
                            </td>
                            <td class="px-6 py-4 text-white">
                                Direccion Academica
                            </td>
                            <td class="px-6 py-4 text-white">
                                PZ
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-5-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-8-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                9-7-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                Luis Felipe
                            </td>
                            <td class="px-6 py-4 text-white">
                                Devuelta
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                85151254
                            </td>
                            <td class="px-6 py-4 text-white">
                                Caja 1 lote direccion academica
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[rgb(36,45,102)]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                        <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey Barrios Valverde
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                II
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                N0WER1
                            </td>
                            <td class="px-6 py-4 text-white">
                                i5 decima generacion
                                hp 2022
                            </td>
                            <td class="px-6 py-4 text-white">
                                Direccion Academica
                            </td>
                            <td class="px-6 py-4 text-white">
                                PZ
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-5-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-8-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                9-7-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                Luis Felipe
                            </td>
                            <td class="px-6 py-4 text-white">
                                Devuelta
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                85151254
                            </td>
                            <td class="px-6 py-4 text-white">
                                Caja 1 lote direccion academica
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                        <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey Barrios Valverde
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                II
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                N0WER1
                            </td>
                            <td class="px-6 py-4 text-white">
                                i5 decima generacion
                                hp 2022
                            </td>
                            <td class="px-6 py-4 text-white">
                                Direccion Academica
                            </td>
                            <td class="px-6 py-4 text-white">
                                PZ
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-5-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-8-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                9-7-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                Luis Felipe
                            </td>
                            <td class="px-6 py-4 text-white">
                                Devuelta
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                85151254
                            </td>
                            <td class="px-6 py-4 text-white">
                                Caja 1 lote direccion academica
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                        <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey Barrios Valverde
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                II
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                N0WER1
                            </td>
                            <td class="px-6 py-4 text-white">
                                i5 decima generacion
                                hp 2022
                            </td>
                            <td class="px-6 py-4 text-white">
                                Direccion Academica
                            </td>
                            <td class="px-6 py-4 text-white">
                                PZ
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-5-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-8-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                9-7-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                Luis Felipe
                            </td>
                            <td class="px-6 py-4 text-white">
                                Devuelta
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                85151254
                            </td>
                            <td class="px-6 py-4 text-white">
                                Caja 1 lote direccion academica
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66] group">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                        <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey Barrios Valverde
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                II
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                N0WER1
                            </td>
                            <td class="px-6 py-4 text-white">
                                i5 decima generacion
                                hp 2022
                            </td>
                            <td class="px-6 py-4 text-white">
                                Direccion Academica
                            </td>
                            <td class="px-6 py-4 text-white">
                                PZ
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-5-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-8-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                9-7-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                Luis Felipe
                            </td>
                            <td class="px-6 py-4 text-white">
                                Devuelta
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                85151254
                            </td>
                            <td class="px-6 py-4 text-white">
                                Caja 1 lote direccion academica
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                        <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey Barrios Valverde
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                II
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                N0WER1
                            </td>
                            <td class="px-6 py-4 text-white">
                                i5 decima generacion
                                hp 2022
                            </td>
                            <td class="px-6 py-4 text-white">
                                Direccion Academica
                            </td>
                            <td class="px-6 py-4 text-white">
                                PZ
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-5-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-8-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                9-7-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                Luis Felipe
                            </td>
                            <td class="px-6 py-4 text-white">
                                Devuelta
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                85151254
                            </td>
                            <td class="px-6 py-4 text-white">
                                Caja 1 lote direccion academica
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#132335] group-hover:bg-[#242d66]">
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#132335] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#212C39] border-b hover:bg-[#242d66] group">
                        <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey Barrios Valverde
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                II
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                N0WER1
                            </td>
                            <td class="px-6 py-4 text-white">
                                i5 decima generacion
                                hp 2022
                            </td>
                            <td class="px-6 py-4 text-white">
                                Direccion Academica
                            </td>
                            <td class="px-6 py-4 text-white">
                                PZ
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-5-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-8-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                9-7-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                Luis Felipe
                            </td>
                            <td class="px-6 py-4 text-white">
                                Devuelta
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                85151254
                            </td>
                            <td class="px-6 py-4 text-white">
                                Caja 1 lote direccion academica
                            </td>
                            <td class="grid grid-cols-3 gap-2 mt-4 bg-[#212C39] group-hover:bg-[#242d66]">
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Añadir</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Eliminar</button>
                                <button className='bg-[#212C39] text-white group-hover:bg-[#242d66]'>Editar</button>
                            </td>
                        </tr>
                        <tr class="bg-[#132335] border-b hover:bg-[#242d66] group">
                        <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Andrey Barrios Valverde
                            </th>
                            <td class="px-6 py-4 text-white">
                                118080476
                            </td>
                            <td class="px-6 py-4 text-white">
                                II
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                N0WER1
                            </td>
                            <td class="px-6 py-4 text-white">
                                i5 decima generacion
                                hp 2022
                            </td>
                            <td class="px-6 py-4 text-white">
                                Direccion Academica
                            </td>
                            <td class="px-6 py-4 text-white">
                                PZ
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-5-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                5-8-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                9-7-2023
                            </td>
                            <td class="px-6 py-4 text-white">
                                Luis Felipe
                            </td>
                            <td class="px-6 py-4 text-white">
                                Devuelta
                            </td>
                            <td class="px-6 py-4 text-white">
                                Andrey@gmail.com
                            </td>
                            <td class="px-6 py-4 text-white">
                                85151254
                            </td>
                            <td class="px-6 py-4 text-white">
                                Caja 1 lote direccion academica
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

export default TableEstudiantes