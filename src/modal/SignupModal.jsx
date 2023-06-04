import React from "react";

function SignupModal() {
  return (
    <>
      <div className="p-4 pl-12 w-full">
        <button>Back</button>
      </div>
      <div className="w-full h-screen text-center flex flex-col justify-center items-center">
        <div className="space-y-6 md:w-[500px]">
          <div>
            <h1 className="text-2xl py-4">Enter confirmation Code</h1>
            <p>
              We emailed you a code. Please input the code here for account
              verification
            </p>
          </div>
          <div>
            <input
              type="text"
              className="w-[60px] border-2 focus:border-sky-300 border-gray-400 p-2 shadow-md rounded outline-none px-4 text-lg font-bold mx-6"
            />
            <input
              type="text"
              className="w-[60px] border-2 focus:border-sky-300 border-gray-400 p-2 shadow-md rounded outline-none px-4 text-lg font-bold mx-6"
            />
            <input
              type="text"
              className="w-[60px] border-2 focus:border-sky-300 border-gray-400 p-2 shadow-md rounded outline-none px-4 text-lg font-bold mx-6"
            />
            <input
              type="text"
              className="w-[60px] border-2 focus:border-sky-300 border-gray-400 p-2 shadow-md rounded outline-none px-4 text-lg font-bold mx-6"
            />
          </div>
          <div className="p-2">
            <button className="w-[200px] text-white bg-blue-500 p-1 shadow-xl border-[#44A0A0] rounded-md">Create Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupModal;
