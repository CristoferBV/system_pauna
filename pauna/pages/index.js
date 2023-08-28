import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from './Administracion/Components/Sidebar'
import UserWindow from './Administracion/Components/userWindow'
import ProfileClient from './Biblioteca/Cliente/Components/ProfileClient'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <UserWindow/> */}
      <UserWindow/>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <HomeClient/> */}
      {/* <LoanClient/> */}
      {/* <DevolutionClient/> */}
      {/* <ProfileClient/> */}
      
    </>
  )
}
