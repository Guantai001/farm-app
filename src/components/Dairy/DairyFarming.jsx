import React from "react";
import { Link } from "react-router-dom";

function DairyFarming(){
  

    return (
        <>

    <div className="flex flex-row space-x-3">
      <Link to="/table">
        <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
           My Dairy Farm
        </button>
      </Link>

      <Link to="/produce">
        <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            Produce
        </button>
      </Link>
    
      <Link to="/put">
        <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            Input Dairy Farm
        </button>
      </Link>

     
    </div>

        <div 
         style={{width: "105%"}}className="w-full h-1 bg-gray-300 rounded-full mt-4">
        </div>


       
        </>
    )

}

export default DairyFarming
