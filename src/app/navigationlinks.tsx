import React from 'react'
import Link from 'next/link'
const NavigationLinks = () => {
  return (
   
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center bg-fuchsia-500">
          <Link className="mr-5" href={'/'}>Home</Link>
          <Link className="mr-5" href={'/productinfo'}>Product Info</Link>
        </div>
     
  </div> 
  )
}

export default NavigationLinks
