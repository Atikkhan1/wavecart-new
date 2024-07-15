'use client'
import React, { useState, useEffect, Suspense } from "react";
import ProductDesign from "./components/ProductDesign";
import Categorybar from "./components/Categorybar";
import Loading from "./loading";
import Head from "next/head";


export default function Home() {
  const [data, setData] = useState([]); 
  const [loader, setloader] = useState(); 
  // let random = Math.floor(Math.random() * 100)
  
  useEffect(() => {

    const fetchData = async () => {
        setloader(<Loading></Loading>)
        const response = await fetch("/api/getAllProducts");
        const jsonData = await response.json();
        setData(jsonData); 
        setloader('')
    };

    fetchData();
  }, []); 

  return (
    <div className="">

      <Categorybar />

      <img className="w-full" src="/Banner.jpg" alt="" />
      
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap max-md:gap-x m-4">
            {loader}
            {data.map((pro) => (
              <ProductDesign
                key={pro._id}
                id={pro._id}
                name={pro.name.slice(0, 30) + "..."}
                image={pro.image}
                price={pro.price}
                category={pro.category}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
