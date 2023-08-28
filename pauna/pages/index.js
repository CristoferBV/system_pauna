import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from './Administracion/Components/Sidebar'
import UserWindow from './Administracion/Components/userWindow'
import Login from './Login and Register/Login/Login'
import Register from './Login and Register/Register/Register'
import HomeClient from './Biblioteca/Cliente/Components/HomeClient'
import LoanClient from './Biblioteca/Cliente/Components/LoanClient'
import DevolutionClient from './Biblioteca/Cliente/Components/DevolutionClient'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <UserWindow/> */}
      {/* <UserWindow/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <HomeClient/> */}
      <LoanClient/>
      {/* <DevolutionClient/> */}
    </>
  )
}
