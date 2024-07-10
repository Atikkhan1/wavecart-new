'use client'

import React, { Suspense, useEffect, useState } from 'react'
import ProductDesign from "/app/components/ProductDesign";
import Categorybar from '/app/components/Categorybar';
import Loading from '/app/loading';



const ProductCategorySlug = ({params}) => {
  
  const [Data, setData] = useState([]);
  let slug = params.ProductCategory;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/getProducts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: 'category',
          value: slug,
        }),
      });
      const jsonData = await response.json();
      
      setData(jsonData)
      
    };

    fetchData();
  }, []);

    
    return (
      <div>
        <Categorybar></Categorybar>
            <Suspense fallback={<Loading/>}>
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto ">
            <div className="flex flex-wrap  max-md:gap-x m-4">
            
            {Data.map((pro)=>{
              return  (
                <ProductDesign key={pro._id} id={pro._id} name={pro.name.slice(0,30)+'...'} 
                image={pro.image} 
                price={pro.price}
                category={pro.category}
                />)})}
            
  
  
  
            </div>
          </div>
        </section>
            </Suspense>
      </div>
    );
  }

export default ProductCategorySlug
