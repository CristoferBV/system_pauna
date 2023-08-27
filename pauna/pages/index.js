import { Inter } from 'next/font/google'
import UserWindow from './Administracion/Components/User/userWindow'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
      <UserWindow/>   
    </>
  )
}
