import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categorybar = () => {

    let optionsData = [
        {name:"Tshirts",link:"/category/tshirts",img:"/categoryImage/tshirts.jpg" },
        {name:"Toys ",link:"/category/toys",img:"/categoryImage/toys.jpg" },
        {name:"Shoes",link:"/category/shoes",img:"/categoryImage/shoes.jpg" },
        {name:"Watch",link:"/category/watch",img:"/categoryImage/watch.jpg" },
        {name:"Hoodies",link:"/category/hoodies",img:"/categoryImage/hoodies.jpg" },
        {name:"Shirts",link:"/category/shirts",img:"/categoryImage/shirts.jpg" },
        {name:"Earbuds",link:"/category/earbuds",img:"/categoryImage/earbuds.jpg" },
      ]
    

  return (
    <div className={`flex w-full max-md:overflow-x-auto bg-gray-100 gap-3 p-1 shadow-inner shadow-gray-400`}>
    {optionsData.map((d)=>{
    return (
    <Link key={d.name} href={d.link} className='inline-block w-auto items-center px-2 pt-0.5 text-xs rounded-lg md:text-xl font-extrabold font-mono text-black '>
      <div className='flex w-full h-8 overflow-hidden justify-center items-end'>
      <Image src={d.img}
    alt="/" width={'34'} height={'2'}  className=''/>
      </div>
    <p className='flex  '>{d.name}</p>
    
    </Link>
)})}

  </div>
  )
}

export default Categorybar
