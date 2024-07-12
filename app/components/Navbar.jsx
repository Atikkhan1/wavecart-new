'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import './style.css'

const Navbar = () => {
  const [index, setindex] = useState('-10')


  

  let Option = (p)=>{
    return (
    <Link className='flex w-full p-2 ' href={p.href} onClick={()=>{setindex('-10')}}>
    <svg className='size-5 my-auto mr-2' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >{p.icon}</svg>
      <p className='font-semibold text-xl' style={{fontFamily:'Arial'}}>{p.name}</p>
    </Link>
    )
  }

  return (
  <div className='shadow-2xl shadow-gray-500'>

      <style jsx global>
      {
        `

  
        #menu-option{
          z-index:${index};
        }
        `
      }
    </style>


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


      
    <div className='' id='account-button' onPointerEnter={()=>{setindex(10)}} >

      <button className='stroke-white size-6 mx-4 mt-2 text-black' id='menu-button'>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </button>
      
      <div id='menu-option' className='block w-40 rounded-md -z-10 -translate-x-28 absolute border-black border-x-4 bg-slate-300'>
        <Option name='Account' href="/auth/login" icon={<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></>}/> <hr />
        <Option name='Order' href='/auth' icon={<><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></>}/> <hr />
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
