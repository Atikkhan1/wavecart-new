"use client";
import React, { useState, useEffect } from "react";
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
      setloader(<Loading></Loading>);
      const response = await fetch("/api/getAllProducts");
      const jsonData = await response.json();
      setData(jsonData);
      setloader("");
    };

    fetchData();
  }, []);

  return (
    <div >
      {loader}
      <div className={loader == ""?"":"hidden"}>
        
      <Categorybar />


      <div className="flex overflow-x-scroll items-center  w-full "> 
      <img className="w-full object-fit flex-1 p-2" src="https://static.vecteezy.com/system/resources/previews/002/006/775/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="" />
      <img className="w-full object-fit flex-1 p-2" src="/watch-banner.png" alt="" />
      <img className="w-full object-fit flex-1 p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5o_cG6Hag6U5UPWR4SK5BMlZCNNc9IXy0Q&s" alt="" />
      <img className="w-full object-fit flex-1 p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHSbwaFDloPrGn-VqXFHqDJvpeoiAe69_ZQ&s" alt="" />
      <img className="w-full object-fit flex-1 p-2" src="" alt="" />
      <img className="w-full object-fit flex-1 p-2" src="" alt="" />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap max-md:gap-x m-4">
            
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
      <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
    </div>
              </div>
  );
}
