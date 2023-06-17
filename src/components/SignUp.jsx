import React, { useState } from "react";
import mySvg from "../assets/unsplash_9pjBx5uVBlg.png";
import {FiEye} from "react-icons/fi"
import {RxEyeClosed} from "react-icons/rx"
import axios from "axios"
function SignUp({setSwitchForm}) {
 const [name, setName]=useState("")
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const [confirmPassword,setConfirmPassword]=useState("")
 const [showPassword,setShowPassword]= useState(false)
 const [error,setError]=useState(false)
 const [errormsg,setErrorMsg] = useState("")
  const handleSignup = async (e)=>{
    e.preventDefault()
    if(password !== confirmPassword){
      setError(true)
      setErrorMsg("Password does not match")
    }
    try {
      const userDetails = {name,email,password}
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/user/signup`, userDetails);
      // if(password !== confirmPassword){
      //   setError("Password Does not Match")
      //   console.log(error)
      // }
      if(response.status === 200){
        console.log(response.data)
        setSwitchForm(false)
      }
    } catch (error) {
      // error.response.data
      console.log(error)
    }
  }
  // const [show,setShow]= useState("password")
  return (
    <>
      <div className="container m-auto md:min-h-screen md:max-h-screen h-full flex flex-col justify-center items-center border">
        <div className="w-full md:min-h-screen md:max-h-screen h-full flex border">
          <div
            className=" hidden w-1/2 border bg-cover md:flex flex-col justify-center items-center opacity-[0.9]"
            style={{ backgroundImage: `url(${mySvg})` }}
          >
            <div className="text-center text-gray-100 p-3 font-extrabold">
              <h1>Cozy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium doloribus nihil magni expedita ut ipsa officiis quis
                voluptatibus? Minima quas eos doloribus esse placeat illum
                eligendi distinctio magni earum. At?
              </p>
            </div>
          </div>
          <form onSubmit={handleSignup} className=" w-full md:w-1/2 border p-4 space-y-6">
          <div className="w-full border p-6 text-center">
              <h1>Welcome Back</h1>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center space-y-4 md:space-y-0  ">
              <div className="flex flex-col space-y-2 ">
                <label>
                  First Name
                  </label>
                  <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="border w-full rounded" />
                
              </div>
              <div className="flex flex-col space-y-2 ">
                <label>Last Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="border rounded" />
              </div>
            </div>
            <div className="w-full flex flex-col ">
              <label>You are joining as?</label>
              <select className="w-full outline-none border rounded space-y-3 p-2">
                <option value="">Writter</option>
                <option value="">Reader</option>
              </select>
            </div>
            <div className="flex flex-col">
                <label>Email</label>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="name@mail.com" className="border py-2 px-3 rounded" />
                
              </div>
            <div className="flex flex-col relative  ">
                <label>Password</label>
                <input type={showPassword ?"text":"password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} className="border p-2 rounded" />
                <span onClick={()=>{setShowPassword(!showPassword)}}><FiEye className="absolute right-5 top-9"/></span>
              </div>
              <div className="flex flex-col relative">
                <label>Confirm Password</label>
                <input type={showPassword ? "text":"password"} value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} className="border p-2 rounded" />
                <span onClick={()=>{setShowPassword(!showPassword)}}><RxEyeClosed className="absolute right-5 top-9"/></span>
              </div>
              {error &&(
                <span>{errormsg}</span>
              )}
              <div className="w-full text-center">
              <button  className="w-[200px] text-white bg-blue-500 p-1 shadow-xl border-[#44A0A0] rounded-md">
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
