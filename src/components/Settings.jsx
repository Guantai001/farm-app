import React from "react";

function Settings(){

    return (
        <>
        {/* simple setting that you are able to input milk  price  */}

        <div className="flex flex-row space-x-4 mt-5 ">
            <div className="flex flex-col ">
                <h1 className="text-4xl font-bold">Settings</h1>
                <p className="text-gray-500 mx-5">Set your price</p>
                 
                 
            </div>
        </div>
        <hr className="border-2 border-gray-400 mt-4" />
        <form className="flex flex-row space-x-4 mt-5 ">
        <div className="flex flex-row space-x-4 mt-5 ">
            <div className="flex flex-col ">
                <h1 className="text-4xl font-bold">Milk Price</h1>
                <p className="text-gray-500 mx-5">Set your milk price</p>
                
                <input type="text" placeholder="Milk Price" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5"></input>
                <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-5">
                    Submit
                </button>
            </div>
        </div>
        </form>
        <hr className="border-2 border-gray-400 mt-4" />
        <form className="flex flex-row space-x-4 mt-5 ">
        <div className="flex flex-row space-x-4 mt-5 ">
            <div className="flex flex-col ">
                <h1 className="text-4xl font-bold">Tea Price</h1>
                <p className="text-gray-500 mx-5">Set your tea price</p>
                <input type="text" placeholder="Tea Price" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5"></input>
                <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-5">
                    Submit
                </button>
            </div>
        </div>
 </form>


        </>
    )

}

export default Settings