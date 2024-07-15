'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import './style.css'

const Navbar = () => {
  
  return (
  <div className=''>



    <div className='w-full flex bg-white 
    items-center '>

    
      <Link href={'/'} className=' flex max-md:h-16 ml-2 text-black'>
        <img src="/logo.png" alt=""  className='size-12 flex my-auto ml-1' />
        <p  alt=""  className='text-3xl flex my-auto font-sans -mx-1' > avecart</p>
      </Link>

      <Searchbar className="max-md:hidden"></Searchbar>

      <Link className='stroke-white size-6 mx-4 ml-auto text-black ' href={'/auth/login'}>
        <svg  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></  circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      </Link>

      <Link href={'/auth/login'} className='stroke-white size-6 mx-4 text-black' id='menu-button'>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </Link>
      
    
   



    </div>
    <div className='flex md:hidden w-full h-12 bg-white'>

      <Searchbar className="mx-2 "></Searchbar>

    </div>
   
  </div>
  )

}
export default Navbar
