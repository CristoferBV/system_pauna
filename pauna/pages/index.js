import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from './Administracion/Components/Sidebar'
import UserWindow from './Administracion/Components/userWindow'
import Login from './Login and Register/Login/Login'
import Register from './Login and Register/Register/Register'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <UserWindow/> */}
      {/* <UserWindow/> */}
      {/* <Login/> */}
      <Register/>
    </>
  )
}
