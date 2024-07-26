"use client";
import React, { useState, useEffect } from "react";
import ProductDesign from "./components/ProductDesign";
import Categorybar from "./components/Categorybar";
import Loading from "./loading";
import { Alert, Snackbar } from "@mui/material";


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

      <div onClick={()=>{}} className="flex w-full h-10 max-md:overflow-hidden items-center bg-green-300  p-1 ">
        <span className="flex scroll-element italic whitespace-nowrap">❤️ Sale is going on !!! , what are you waiting for ? Buy at lowest price Now! 👍</span> 
      </div>
        
      <Alert severity="success" className="w-11/12 mx-auto mt-2 font-bold" >
        100% free delivary on your first order
      </Alert>
      
      <div className="flex h-40 w-full mx-0 my-auto overflow-x-scroll scroll-smooth "> 
        <img id="page-1" className="block justify-center items-center w-full h-full p-2" src="https://static.vecteezy.com/system/resources/previews/002/006/775/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="" />
        <img id="page-2" className="block justify-center items-center w-full h-full p-2" src="/watch-banner.png" alt="" />
        <img id="page-3" className="block justify-center items-center w-full h-full p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5o_cG6Hag6U5UPWR4SK5BMlZCNNc9IXy0Q&s" alt="" />
        <img id="page-4" className="block justify-center items-center w-full h-full p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHSbwaFDloPrGn-VqXFHqDJvpeoiAe69_ZQ&s" alt="" />
      {/* <img className="flex justify-center items-center w-full m-2" src="" alt="" /> */}
      </div>
        <div className="flex justify-center my-2 w-full h-auto  ">
          <button onClick={(e)=>"page-1"} className="border mx-2 my-auto w-3 h-3 rounded-full border-gray-500 hover:bg-gray-500" ></button>
          <button onClick={(e)=>"page-2"} className="border mx-2 my-auto w-3 h-3 rounded-full border-gray-500 hover:bg-gray-500" ></button>
          <button onClick={(e)=>"page-3"} className="border mx-2 my-auto w-3 h-3 rounded-full border-gray-500 hover:bg-gray-500" ></button>
          <button onClick={(e)=>"page-4"} className="border mx-2 my-auto w-3 h-3 rounded-full border-gray-500 hover:bg-gray-500" ></button>
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
              subcategory={pro.subcategory}
              margin={pro.margin}
              />
            ))}
          </div>
        </div>
      </section>
    
    </div>
  </div>
  );
}
