import React from 'react'
import { useState } from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
function AuthPage() {
    const [switchForm,setSwitchForm]= useState(true)
    function handleToggle(){
      if(switchForm){
        setSwitchForm(false)
      } else if (!switchForm){
        setSwitchForm(true)
      }
    }
  return (
    <>
    <div className='flex container justify-center m-auto items-center p-2 shadow-lg'>
        <button className='outline-none w-[250px] border-b-4 border-b-[#D9D9D9]  pb-1 focus:border-b-4 focus:border-blue-500' onClick={handleToggle}>Sign Up</button>
        <button className='outline-none w-[250px] border-b-4 border-b-[#D9D9D9] pb-1 focus:border-b-4 focus:border-blue-500' onClick={handleToggle}>Login</button>
    </div>
    <div>
        {switchForm ? <SignUp setSwitchForm={setSwitchForm}/> : <Login/>}
    </div>
    </>
  )
}

export default AuthPage