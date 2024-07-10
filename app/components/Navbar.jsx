'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
const Navbar = () => {
  const [display, setdisplay] = useState('none')


  return (
  <div className=' shadow-2xl shadow-gray-500'>


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


      
    <div className='' id='account-button'>

      <button className='stroke-white size-6 mx-4 mt-2 text-black' id='menu-button'>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </button>
      
      <div id='menu-option' className='hidden w-40  mt-3 -translate-x-28 absolute bg-slate-300'>
        
        <Link className='flex w-full p-2' href={'/auth/login'}>
      <svg className='size-5 my-auto mr-2' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <p className='font-semibold ' style={{fontFamily:'Arial'}}>my account</p>
      </Link>
       <hr />
       <Link className='flex w-full p-2 ' href={'/auth/login'}>
      <svg className='size-5 my-auto mr-2' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <p className='font-semibold ' style={{fontFamily:'Arial'}}>my account</p>
      </Link>
        
      </div>

    </div>



    </div>
    <div className='flex md:hidden w-full h-12 bg-white'>

      <Searchbar className="mx-2 "></Searchbar>

    </div>
   
  </div>
  )
}

export default Navbar
