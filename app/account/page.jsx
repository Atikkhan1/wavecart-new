'use client'

import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../useLocalStorage';
import { useRouter } from 'next/navigation';

export default function Page() {
  let router = useRouter()
  const [data, setData] = useState({});
  let storage = useLocalStorage("_id")
  const id = storage.getItem();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/auth/profile/getData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            _id: id,
          }),
        });
        if (res.ok) {
          const getData = await res.json();
          
          setData(getData);
        } else {
          console.error('Error fetching data:', res.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () =>{
    storage.removeItem()
    router.push('/auth/login')
  }
  return (
    <div>
      {/* Display your data here */}
      {/* For example: */}
      <p>User ID: {data._id}</p>
      <p>Name: {data.username}</p>
      <p>email: {data.email}</p>
      {/* Add other relevant data fields */}
      <button onClick={()=>{handleLogout()}}>Logout</button>

    </div>
  );
}
