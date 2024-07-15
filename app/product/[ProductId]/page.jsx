'use client'
import React, { useEffect, useState } from "react";


export default function ProductPage ({params}) {
    let slug = params.ProductId
    
    let [Data, setData] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`/api/getProducts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key: '_id',
            value: slug,
          }),
        });
        const jsonData = await response.json();
        
        setData(jsonData[0])
        
      };
  
      fetchData();
    }, []);
  
    
  return (
<div className="">
<div className="flex w-full bg-slate-200 h-20 absolute bottom-0 md:justify-end">
  <button className="flex w-1/3 max-md:m-auto my-auto h-2/3 md:w-1/6  md:mx-4 text-gray-600 border-2 border-current py-2 px-6 focus:outline-none hover:bg-gray-300 rounded justify-center items-center">
    Add to Cart
  </button>
  <button className="flex w-1/3 max-md:m-auto my-auto h-2/3 md:w-1/6  md:mx-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded justify-center items-center">
    Buy Now
  </button>

</div>
<section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 pt-6 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-auto object-cover object-center rounded" src={Data.image}/>
              
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-xl title-font text-gray-500 tracking-widest">{Data.category}</h2>
          <h1 className="text-black text-2xl title-font font-medium mb-1">{Data.name}</h1>
          
          <div className="flex">
            <p className="title-font font-medium text-3xl my-2 text-green-400">₹ {Math.floor(Data.price * 1.5)} /- 
              <b className='ml-2 text-xl text-gray-400 line-through'>₹ {Math.floor(Data.price * 1.7)}/-</b> 
              <b className="ml-5 italic text-2xl">{Math.floor((Data.price * 1.7 - Data.price * 1.5)/(Data.price * 1.7)*100)}% off</b></p>
          </div>

          <p className="leading-relaxed mt-2 overflow-y-scroll h-48 border-2 p-4" dangerouslySetInnerHTML={{ __html: Data.description }}></p>
        </div>
      </div>
    </div>
  </section>

</div>
  )
}


