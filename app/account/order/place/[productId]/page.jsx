'use client'

import React, { useEffect, useState } from "react";
import {useLocalStorage} from '/app/useLocalStorage'
import { useRouter } from "next/navigation";
import Loading from "/app/loading";


export default function page({params}) {
  const productId = params.productId  
  let storage = useLocalStorage("_id")
  let router = useRouter()
  let id = storage.getItem();

  const [loader, setloader] = useState(<Loading></Loading>);
  const [product, setProduct] = useState([]);
  const [orderDetail, setorderDetail] = useState({
    user:"",
    name:"",
    contact:"",
    size:"none",
    quantity:"",
    orginal_price:"",
    order_price:"",
    order_date:"",
    product:{},
    address:{
      house_no:"",
      area:"",
      city:"",
      nearby:"",
      pincode:"",
      state:""
    }
  });


  useEffect(() => {
    const fetchProduct = async () => {
      if (id != undefined) {
        const response = await fetch(`/api/getProducts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key: "_id",
            value:productId
          }),
        });
        const jsonproduct = await response.json();

          setProduct(jsonproduct[0]);
          setloader('')
        }
        else {
        router.push("/account/login");
      }
    };
    fetchProduct();
  }, []);

  const handleSubmit =(event)=>[
    event.preventDefault()
  ]
  return (
    <>
    {loader}
<div className={loader == ""?"":"hidden"}>


<section id="productdescription" className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-1/2 h-auto object-cover object-center rounded" src={product.image}/>

      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.name}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-green-500 border-b-2 border-green-500 py-2 text-lg px-1">Description</a>

        </div>
        <p className="leading-relaxed mb-4 h-36 overflow-scroll border p-2" dangerouslySetInnerHTML={{ __html: product.description }}></p>
        <div className={ (product.category == "tshirts" ?"flex":"hidden") + " border-t border-gray-200 py-2 "}>
          <span className="text-gray-500 ">Size</span>
          <select onChange={(e)=>{orderDetail.size = e.target.value}} className={"ml-auto text-gray-900 border-green-500 w-14 indent-1 border rounded-md " }>
            <option value="S" className="justify-center">S</option>
            <option value="M" className="justify-center">M</option>
            <option value="L" className="justify-center">L</option>
            <option value="XL" className="justify-center">XL</option>
            <option value="XXl" className="justify-center">XXL</option>
          </select>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <input className="flex ml-auto text-gray-900 w-14 indent-2 border-green-500 border rounded-md justify-center" max={5} min={1} type="number" name="" id="" placeholder="1"/>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900"> <p className="title-font font-medium text-3xl my-2 text-green-400">₹ {Math.floor(product.price * 1.5)} /- 
              <b className='ml-2 text-xl text-gray-400 line-through'>₹ {Math.floor(product.price * 1.7)}/-</b> </p>
              </span>
          <button onClick={()=>{console.log(orderDetail)}} className="flex ml-auto text-white h-10 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="adress form" className="md:w-2/5 m-auto mb-40">
        <div className=" mb-4 mx-auto w-11/12">
          <a className="block text-green-500 border-b-2 w-full border-green-500 py-2 text-lg px-1 ">Address</a>

          <form className="mt-4">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" autoComplete="name" name="Name" id="Name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                <label htmlFor="Name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" autoComplete="mobile tel" name="contact_no" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                <label htmlFor="contact_no" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Contact Number</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" autoComplete="shipping" name="house_no" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                <label htmlFor="house_no" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                House No/Building name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" autoComplete="shipping" name="street" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                <label htmlFor="street" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Street Address/Area</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" autoComplete="shipping" name="nearby" id="nearby" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                <label htmlFor="nearby" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Nearby address/Road (optional)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" autoComplete="shipping" name="city" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Village/City</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" autoComplete="shipping" name="pincode" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                <label htmlFor="pincode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Pin code</label>
            </div>
            <button type="submit" onSubmit={(e)=>{handleSubmit()}} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
          </form>

        </div>
</section>



</div>
</>
  )
}
