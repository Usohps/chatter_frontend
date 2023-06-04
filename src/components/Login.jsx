import React from "react";
import mySvg from "../assets/unsplash_9pjBx5uVBlg.png";
import { FiEye } from "react-icons/fi";
function Login() {
  return (
    <>
      <div className="w-full  md:min-h-screen md:max-h-screen h-full flex flex-col justify-center items-center border">
        <div className="w-full min-h-screen md:max-h-screen  flex border">
          <div
            className="hidden  md:flex flex-col justify-center items-center w-1/2 border bg-cover"
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
          <form className="w-full md:w-1/2  p-4 space-y-6">
            <div className="w-full border p-6 text-center">
              <h1>Welcome Back</h1>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="name@mail.com"
                className="border p-2"
              />
            </div>
            <div className="flex flex-col relative  ">
              <label htmlFor="">Password</label>
              <input type="password" className="border p-2" />
              <button>
                <FiEye className="absolute right-5 top-9" />
              </button>
            </div>
            <div className="w-full text-center">
              <button className=" w-[200px] text-white bg-blue-500 p-1 shadow-xl border-[#44A0A0] rounded-md">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
