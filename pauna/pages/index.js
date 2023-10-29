import { Inter } from 'next/font/google'
import UserWindow from './Administracion/Components/User/userWindow'
import HomeClient from './Biblioteca/Cliente/Components/InterfazCliente/HomeClient'
import LoanClient from './Biblioteca/Cliente/Components/InterfazCliente/LoanClient'
import DevolutionClient from './Biblioteca/Cliente/Components/InterfazCliente/DevolutionClient'
import ProfileClient from './Biblioteca/Cliente/Components/InterfazCliente/ProfileClient'
import Login from './LoginAndRegister/Login/Login'
import Register from './LoginAndRegister/Register/Register'

import Slidebar from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar'
import SidebarCitas from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas'
import SidebarDevoluciones from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarDevoluciones'
import SidebarEstudiantes from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarEstudiantes'
import SidebarReporte from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarReporte'
import Sidebar from './Administracion/Components/Sidebar/Sidebar'
import NavbarAdminBiblioteca from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/NavbarAdminBiblioteca'


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
      {/* <PaginaCirculo/> */}
      <Login/>
      {/* <Sidebar/> */}
      {/* <NavbarAdminBiblioteca/> */}
    </>

  )
}
