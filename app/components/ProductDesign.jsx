import Link from 'next/link'
import React from 'react'

const ProductDesign = (param) => {
    return (
        <div className="lg:w-1/5 max-md:w-1/2 p-4 w-full ">
          <Link href={`/product/${param.id}`} className="block relative h-70 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={param.image}
            />
          </Link>
          <div className="mt-4">
            <h3 className=" text-gray-500 text-xs tracking-widest title-font font-bold mb-1">
              {param.category}
            </h3>
            <h2 className=" title-font text-lg font-medium">
              {param.name}
            </h2>
            <p className="flex mt-1 text-green-600">₹{Math.floor(param.price * 1.4)}/- <b className='ml-2 text-gray-400 line-through'>₹{Math.floor(param.price * 2)}</b></p>
          </div>
        </div>
  )
}

export default ProductDesign
