'use client'

import React, { useEffect, useState } from 'react'
import ProductDesign from "/app/components/ProductDesign";
import Categorybar from '/app/components/Categorybar';
import Loading from '../../loading';




const ProductCategorySlug = ({params}) => {
  
  const [Data, setData] = useState([]);
  const [loader, setloader] = useState('');
  let slug = params.ProductCategory;

  useEffect(() => {
    const fetchData = async () => {
      setloader(<Loading></Loading>)
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
      
      if(jsonData.length == 0){
        const res = await fetch(`/api/getProducts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key: 'subcategory',
            value: slug,
          }),
        });
        const jsonSubData = await res.json();
        setData(jsonSubData)
        setloader('')
      }else{
        
        setData(jsonData)
        setloader('')
      }
      
    };

    fetchData();
  }, []);

    
    return (
      <div>
        <Categorybar></Categorybar>
            
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto ">
            <div className="flex flex-wrap  max-md:gap-x m-4">
            {loader}
            {Data.map((pro)=>{
              return  (
                <ProductDesign key={pro._id} id={pro._id} name={pro.name.slice(0,30)+'...'} 
                image={pro.image} 
                price={pro.price}
                category={pro.subcategory}
                />)})}
            
  
  
  
            </div>
          </div>
        </section>
  
      </div>
    );
  }

export default ProductCategorySlug
