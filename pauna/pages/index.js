import { Inter } from 'next/font/google'
import UserWindow from './Administracion/Components/User/userWindow'


import Slidebar from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/Slidebar'
import SidebarCitas from './Biblioteca/Cliente/Components/InterfazAdminBiblioteca/SidebarCitas'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <UserWindow/> */}
      {/* <Slidebar/> */}
      <SidebarCitas/>
    </>

  )
}
