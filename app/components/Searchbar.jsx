import Link from 'next/link'
import React from 'react'

const Searchbar = (p) => {
  return (
    <div className={'flex h-10 md:m-auto md:w-1/2 max-md:w-full border-4 border-current rounded-lg  bg-blue-50 text-blue-50 ' + p.className}>
      <input className='w-full text-gray-500 rounded-l-md indent-4  bg-blue-50 focus:outline-white' type="text" name="search" id="search" placeholder='search products ...'/>
      <Link href={'/'} className='flex my-auto mx-2 text-gray-400 ' >
      <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </Link>
    </div>
  )
}

export default Searchbar
