import Image from 'next/image'
import { Inter } from 'next/font/google'

import TableDispositivos from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/TableDispositivos'
import Slidebar from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/Slidebar'
import TableCitas from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/TableCitas'
import TableEstudiantes from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/TableEstudiantes'
import TableDevolucion from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/TableDevolucion'
import TableReporte from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/TableReporte'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Slidebar/>
      {/* <TableDispositivos/> */}
      {/* <TableCitas/> */}
      {/* <TableEstudiantes/> */}
      {/* <TableDevolucion/> */}
      {/* <TableReporte/> */}
    </div>
  )
}
