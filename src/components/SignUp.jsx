import React, { useState } from "react";
import mySvg from "../assets/unsplash_9pjBx5uVBlg.png";
import {FiEye} from "react-icons/fi"
import {RxEyeClosed} from "react-icons/rx"
function SignUp() {
  // const [show,setShow]= useState("password")
  function showPassword(e){
    const type = e.target.type
    if(type){
      console.log(type)
    }
  }
  return (
    <>
      <div className="container m-auto md:min-h-screen md:max-h-screen h-full flex flex-col justify-center items-center border">
        <div className="w-full md:min-h-screen md:max-h-screen h-full flex border">
          <div
            className=" hidden w-1/2 border bg-cover md:flex flex-col justify-center items-center opacity-[0.8]"
            style={{ backgroundImage: `url(${mySvg})` }}
          >
            <div className="text-center text-white">
              <h1>Cozy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium doloribus nihil magni expedita ut ipsa officiis quis
                voluptatibus? Minima quas eos doloribus esse placeat illum
                eligendi distinctio magni earum. At?
              </p>
            </div>
          </div>
          <form className=" w-full md:w-1/2 border p-4 space-y-6">
          <div className="w-full border p-6 text-center">
              <h1>Welcome Back</h1>
            </div>
            <div className="flex justify-between items-center  ">
              <div>
                <label className="flex flex-col ">
                  First Name
                  <input type="text" className="border" />
                  </label>
                
              </div>
              <div className="flex flex-col ">
                <label>Last Name</label>
                <input type="text" className="border" />
              </div>
            </div>
            <div className="flex flex-col ">
              <label>You are joining as?</label>
              <select name="" id="" className="w-full border p-2">
                <option value="">Writter</option>
                <option value="">Reader</option>
              </select>
            </div>
            <div className="flex flex-col">
                <label>Email</label>
                <input type="text" placeholder="name@mail.com" className="border" />
                
              </div>
            <div className="flex flex-col relative  ">
                <label>Password</label>
                <input type="password" className="border p-2" />
                <button onClick={showPassword}><FiEye className="absolute right-5 top-9"/></button>
              </div>
              <div className="flex flex-col relative ">
                <label>Confirm Password</label>
                <input type="password" className="border p-2" />
                <button><RxEyeClosed className="absolute right-5 top-9"/></button>
              </div>
              <div className="w-full text-center">
              <button className="w-[200px] text-white bg-blue-500 p-1 shadow-xl border-[#44A0A0] rounded-md">
                SignUp
              </button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
