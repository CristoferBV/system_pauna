import { Inter } from 'next/font/google'
import UserWindow from './Administracion/Components/User/userWindow'
import TableDispositivos from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/TableDispositivos'
import HomeClient from './Biblioteca/Cliente/Components/InterfazCliente/HomeClient'
import LoanClient from './Biblioteca/Cliente/Components/InterfazCliente/LoanClient'
import DevolutionClient from './Biblioteca/Cliente/Components/InterfazCliente/DevolutionClient'
import ProfileClient from './Biblioteca/Cliente/Components/InterfazCliente/ProfileClient'
import Login from './LoginAndRegister/Login/Login'
import Register from './LoginAndRegister/Register/Register'


import Slidebar from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/Slidebar'
import SidebarCitas from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/SidebarCitas'
import SidebarDevoluciones from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/SidebarDevoluciones'
import SidebarEstudiantes from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/SidebarEstudiantes'
import SidebarReporte from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/SidebarReporte'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <UserWindow/> */}
      {/* <Slidebar/> */}
      {/* <HomeClient/> */}
      {/* <LoanClient/> */}
      {/* <DevolutionClient/> */}
      {/* <ProfileClient/> */}
      <Login/>
      {/* <Register/> */}

    </>

  )
}
