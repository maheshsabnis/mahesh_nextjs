import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import NavigationLinks from './navigationlinks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <div>
      <NavigationLinks/> 
        <h1>Hello</h1>
     </div>
  )
}
