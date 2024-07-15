"use client";

import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  let router = useRouter();
  const [data, setData] = useState({});
  let storage = useLocalStorage("_id");
  const id = storage.getItem();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/auth/profile/getData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: id,
          }),
        });
        if (res.ok) {
          const getData = await res.json();

          setData(getData);
        } else {
          console.error("Error fetching data:", res.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    storage.removeItem();
    router.push("/auth/login");
  };
  return (
    <div className="bg-slate-100">
    <div className="flex w-full bg-white border-b border-t px-8 py-2 shadow-xl shadow-slate-400">
      <p className="text-xl font-bold  ">Hello , <i>{data.username}</i>  </p>
    </div>

    <section className="text-gray-600 body-font bg-white pt-4" >
      <div className="container mx-auto">
        <div className="flex flex-wrap w-full gap-x-5 md:gap-x-12 justify-center">
          <Link href={'/account/order'}  className="flex md:w-1/5 max-md:w-40 text-sm h-10  my-2 gap-2 border-2 hover:translate-y-1 border-gray-200 text-black font-semibold rounded-md justify-center items-center ">
          <svg className="stroke-green-500"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          <p>Orders</p>
          </Link>

          <Link href={'/account/cart'} className="flex md:w-1/5 max-md:w-40 text-sm h-10  my-2 gap-2 border-2 hover:translate-y-1 border-gray-200 text-black font-semibold rounded-md justify-center items-center ">
          <svg className="stroke-green-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></  circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p>Cart</p>
          </Link>

          <Link href={'/account/profile'} className="flex md:w-1/5 max-md:w-40 text-sm h-10  my-2 gap-2 border-2 hover:translate-y-1 border-gray-200 text-black font-semibold rounded-md justify-center items-center ">
          <svg className="stroke-green-500"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>          
          <p>Profile</p>
          </Link>

          <Link href={'/account/help'} className="flex md:w-1/5 max-md:w-40 text-sm h-10  my-2 gap-2 border-2 hover:translate-y-1 border-gray-200 text-black font-semibold rounded-md justify-center items-center ">
          <svg className="stroke-green-500"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>          
          <p>Help</p>
          </Link>
          
        </div>-
      </div>
    </section>

    <div className="flex w-full bg-white mt-2 px-4 py-4 border">
      <div>
      <p className=" font-semibold text-sm ">Verify/Update your Address</p>
      <p  className="italic text-xs text-gray-600">we get to know where to deliver your order </p>
      </div>
      <button className="flex ml-auto my-auto border w-1/4 py-2 justify-center hover:translate-y-1 text-white bg-green-400 rounded-md">
      Update</button>
    </div>

      <div className="w-full h-96 bg-white my-2">

      </div>

      <div  className="flex w-full bg-white mt-2 px-4 py-4 border">
      <div>
      <p className=" font-semibold text-sm ">Log out from this Account</p>
      <p  className="italic text-xs text-gray-600">from {data.email}</p>
      </div>
      <button onClick={()=>{handleLogout()}} className="flex ml-auto my-auto border w-1/4 py-2 justify-center hover:translate-y-1 text-white bg-red-500 rounded-md">
      Log out</button>
      </div>
    </div>
  );
}
