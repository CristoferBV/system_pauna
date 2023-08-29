import { Inter } from 'next/font/google'
import UserWindow from './Administracion/Components/User/userWindow'
import TableDispositivos from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/TableDispositivos'
import Slidebar from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar'
import TableCitas from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/TableCitas'
import TableEstudiantes from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/TableEstudiantes'
import TableDevolucion from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/TableDevolucion'
import TableReporte from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/TableReporte'
import HomeClient from './Biblioteca/Cliente/Components/InterfazCliente/HomeClient'
import LoanClient from './Biblioteca/Cliente/Components/InterfazCliente/LoanClient'
import DevolutionClient from './Biblioteca/Cliente/Components/InterfazCliente/DevolutionClient'
import ProfileClient from './Biblioteca/Cliente/Components/InterfazCliente/ProfileClient'
import Login from './LoginAndRegister/Login/Login'
import Register from './LoginAndRegister/Register/Register'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <UserWindow/> */}
      {/* <Slidebar/> */}
      {/* <TableDispositivos/> */}
      {/* <TableCitas/> */}
      {/* <TableEstudiantes/> */}
      {/* <TableDevolucion/> */}
      {/* <TableReporte/> */}
      {/* <HomeClient/> */}
      {/* <LoanClient/> */}
      {/* <DevolutionClient/> */}
      {/* <ProfileClient/> */}
      <Login/>
      {/* <Register/> */}

    </>

  )
}
