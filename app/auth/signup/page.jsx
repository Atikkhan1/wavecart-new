"use client";

import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Loading from "../../loading";
import {useLocalStorage} from '../../useLocalStorage'


const login = () => {
  const router = useRouter();
  const [errormsg, setErrormsg] = useState("");
  const [otp, setotp] = useState("");
  const [details, setdetails] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    checkpassword: "",
    otp: ""
  });
  const [display, setdisplay] = useState("hidden");
  const [display2, setdisplay2] = useState("");
  const [show, setshow] = useState("password");
  let storage = useLocalStorage("_id")
  const saveTodb = async() =>{
    setErrormsg(<Loading></Loading>)
    const response = await fetch(`/api/auth/register/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: details.email,
          password: details.password,
          username: details.username,
          phone: details.phone
        }),
      });
      const getres = await response.json();
      if (getres == true){
        const res= await fetch(`/api/auth/login/check`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: details.email,
            password: details.password,
          }),
        });
        const jsonData = await res.json();
        storage.setItem(jsonData.data[0]._id)
        router.push('/account')
      }else{
        setErrormsg(getres)
      }
  }

  const getOtp = async () => {
    setErrormsg(<Loading></Loading>);
    const response = await fetch(`/api/auth/register/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: details.email
      }),
    });
    const getotp = await response.json();
    setotp(getotp.otp)
    setErrormsg("otp send to you email id")
  };

  const checkForm = () => {
    if (
      details.username &&
      details.email &&
      details.phone &&
      details.password &&
      details.checkpassword
    ) {
        if(details.phone.length!=10){
            setErrormsg('invalid phone')
        }
        else if (!(details.email)) {
          setErrormsg("incorrect email");
        }
        else if (details.checkpassword != details.password) {
        setErrormsg("password not match");
        } else{
            setErrormsg("otp send to your email")
            setdisplay('flex')
            setdisplay2('hidden')
            getOtp()
            
        }
    } else {
      setErrormsg("fill the form");
    }
  };

  const checkotp = () => {
    if (details.otp == otp){
        setErrormsg('ok')
        saveTodb()
    }else{
        setErrormsg('otp is incorrect')
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex mx-auto justify-center">
            <img
              src="/logo.png"
              className="flex w-16 justify-center items-center"
            />

            <p className="flex  justify-center -ml-2 items-center text-3xl">
              avecart
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 ">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs border-gray-300 border-2 hover:bg-slate-100 rounded-lg py-3 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign in with Google</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  or Sign In with E-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">








                <form className={display2}>
              
                  <input
                    onChange={(e) => {
                      details.username = e.target.value;
                     

                    }}
                    autoComplete="name"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Username"
                  />

                  <input
                    onChange={(e) => {
                      details.phone = e.target.value;
                    }}
                    autoComplete="mobile tel-national"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="number"
                    placeholder="Phone No."
                  />

                  <input
                    onChange={(e) => {
                      details.email = e.target.value;
                    }}
                    autoComplete="email"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email" onInvalid={()=>{console.log('invalid email')}}
                    placeholder="Email"
                  />

                  <input
                    onChange={(e) => {
                      details.password = e.target.value;
                    }}
                    autoComplete="current-password"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type={show}
                    placeholder="Password"
                  />

                  <input
                    onChange={(e) => {
                      details.checkpassword = e.target.value;
                    }}
                    
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type={show}
                    placeholder="Re-enter Password"
                  />

                  <div className="flex items-center my-2 ml-2">
                    <input
                      type="checkbox"
                      onClick={(e) => {
                        e.currentTarget.checked
                          ? setshow("text")
                          : setshow("password");
                      }}
                      id="show"
                      name="show"
                    />
                    <label htmlFor="show" className="mx-2">
                      show password
                    </label>
                  </div>

                </form>
                  <input
                    onChange={(e) => {
                      details.otp = e.target.value;
                    }}
                    className={
                      "w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 " +
                      display
                    }
                    type="text"
                    placeholder="OTP"
                  />

                <div className="flex mt-2 justify-center text-red-500">
                  {errormsg}
                </div>
                <button
                  onClick={() => {
                    checkForm();
                  }}
                  className={"mt-2 tracking-wide font-semibold bg-white border-2 text-green-400 border-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-gray-300 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none "+display2}
                >
                  <span className="ml-">Send OTP</span>
                </button>

                <button
                  onClick={() => {checkotp()}}
                  className={
                    "mt-2 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none " +
                    display
                  }
                >
                  <svg
                    className="w-6 h-6 -ml-2 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-">Sign up</span>
                </button>

















                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Wavecart <></>
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service <></>
                  </a>
                  and its <></>
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default login;
