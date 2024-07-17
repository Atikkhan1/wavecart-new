"use client";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../useLocalStorage";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "../../loading";

export default function page() {
  let storage = useLocalStorage("_id");
  let router = useRouter();
  const [product, setProduct] = useState([]);
  const [loader, setloader] = useState(<Loading></Loading>);
  let id = storage.getItem();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id != undefined) {
        const response = await fetch(`/api/account/getData`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        });
        const jsonData = await response.json();
        
        let inCartArray = jsonData.productData.inCart;
        if(inCartArray==''){
          setloader(<div className="flex justify-center text-3xl italic text-gray-400">Oh! No product in your Cart</div>)
        }
        const ele = [];
        for (let i = 0; i < inCartArray.length; i++) {
          await fetch(`/api/getProducts`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              key: "_id",
              value: inCartArray[i],
            }),
          }).then(async(res)=>{
          const products = await res.json();
          ele.push(products);
          setProduct(ele);
          setloader('')})
        }
      } else {
        router.push("/account/login");
      }
      
        
      
    };
    fetchProduct();
  }, []);


  const removeToCart = async(slug) =>{
      const ele = [];
      const response = await fetch(`/api/account/cart/remove`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountId:storage.getItem(),
          productId:slug
        }),
      }).then(()=>{
        router.refresh()
      })
    }
  
    
  const Cartdesign = (param) => {
    let p = param.who;
    return (
      <div className="flex w-full md:w-5/12 h-32  p-2">
        <img src={p.image} alt="" className="h-full w-24 border" />
        <div className="block h-full w-2/3 ml-auto ">
          <p className=" flex h-6 w-full  overflow-y-clip ">
            {p.name}
          </p>
          <p className="title-font font-medium text-xl my-2 text-green-400">₹ {Math.floor(p.price * 1.5)} /- 
              <b className='ml-2 text-xl text-gray-400 line-through'>₹ {Math.floor(p.price * 1.7)}/-</b> 
              </p>
          <div className="flex mt-auto justify-end gap-2">
            <button onClick={()=>{removeToCart(p._id)}} className="flex p-2 h-10 w-24 justify-center rounded-md hover:translate-y-1 bg-red-500 text-white">
              Remove
            </button>
            <Link href={`/product/${p._id}`} className="flex p-2 h-10 w-24 justify-center rounded-md hover:translate-y-1 bg-green-500 text-white">
              Order
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-slate-100  w-full">
      <div className="md:flex gap-x-20 w-full bg-white mt-6 ">
        <div className="mb-4">{loader}</div>
        {product.map((p)=>{
            return(
              <Cartdesign key={p._id} who={p}/>
            )
          })}

      </div>
    </div>
  );
}
