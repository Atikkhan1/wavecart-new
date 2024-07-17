"use client";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../useLocalStorage";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  let storage = useLocalStorage("_id");
  let router = useRouter();
  const [product, setProduct] = useState([]);
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
        const ele = [];
        for (let i = 0; i < inCartArray.length; i++) {
          const res = await fetch(`/api/getProducts`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              key: "_id",
              value: inCartArray[i],
            }),
          });
          const products = await res.json();
          ele.push(products[0]);
          setProduct(ele);
        }
      } else {
        router.push("/account/login");
      }
    };
    fetchProduct();
  }, []);
  const removeToCart = async(slug) =>{
    if (storage.getItem()!=undefined){
      const response = await fetch(`/api/account/cart/remove`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountId:storage.getItem(),
          productId:slug
        }),
      });
      const jsonData = await response.json();
      router.refresh()
    }else{
      router.push("/auth/login")
    }
  }
    
  const Cartdesign = (param) => {
    let p = param.who;
    return (
      <div className="flex w-full h-32 border p-2">
        <img src={p.image} alt="" className="h-full w-24 border" />
        <div className="block h-full w-2/3 ml-auto ">
          <p className=" flex h-6 w-full  overflow-y-clip ">
            {p.name}
          </p>
          <p className="title-font font-medium text-xl my-2 text-green-400">₹ {Math.floor(p.price * 1.5)} /- 
              <b className='ml-2 text-xl text-gray-400 line-through'>₹ {Math.floor(p.price * 1.7)}/-</b> 
              </p>
          <div className="flex mt-auto  gap-2">
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
      <div className="w-full bg-white mt-6 ">
        {product.map((p)=>{
            return(
              <Cartdesign key={p._id} who={p}/>
            )
          })}

      </div>
    </div>
  );
}
