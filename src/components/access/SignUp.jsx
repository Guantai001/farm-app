import React from "react";

function SignUp () {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 ">
            <div className="flex flex-col items-center justify-center bg-white h-96 rounded-lg shadow-2xl w-1/3 mb-2">
                <h1 className="text-4xl mt-5 font-bold">Sign Up</h1>
                <p className="text-gray-500">Create an account</p>
                <form className="flex flex-col items-center justify-center w-96 h-96">
                    <input type="text" placeholder="Username" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5 mx-2"></input>
                    <input type="text" placeholder="Email" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5"></input>
                    <input type="text" placeholder="Password" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5"></input>
                    <input type="text" placeholder="Confirm Password" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5 mb-2"></input>
                    <button className="px-9 py-3 mb-2 text-lg text-white bg-black rounded-full shadow-md hover:bg-gray-900">
                     Sign Up
                </button>
             
                </form>
            </div>
        </div>

    )
}

export default SignUp;