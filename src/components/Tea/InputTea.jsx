import React from "react";
import TeaFarming from "./TeaFarming";

function InputTea() {
    return (
        <>
        <TeaFarming/>
        <div className="text-center">
                <h3 className="text-2xl text-center mt-9">
                    Input Tea Farm
                </h3>
                <form className="mt-9">
                <div className="flex flex-col space-y-4 mt-9  mx-6">
                    <div className="flex flex-row space-y-2">
                        <div className="flex flex-col space-y-4 mt-4 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200 ">
                                Farm Name
                            </label>
                            <input
                                type="text"
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your farm name"
                            />
                        </div>

                        <div className="flex flex-col space-y-4 mt-4 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                                Farm Location
                            </label>
                            <input
                                type="text"
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your farm location"
                            />
                        </div>

                        <div className="flex flex-col space-y-4 mt-4 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                                Farm Size
                            </label>
                            <input
                                type="text"
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your farm size"
                            />
                        </div>
                    </div>
                </div>

                 <div className="flex flex-col space-y-4 mt-5 mx-6">
                     <div className="flex flex-row space-y-2"> 

                        <div className="flex flex-col space-y-4 mt-4 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                                Farm Type
                            </label>
                            <input
                                type="text"
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your farm type"
                            />
                        </div>
                        <div className="flex flex-col space-y-4 mt-5 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                                Farm Description
                            </label>
                            <input
                                type="text"
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your farm description"
                            />
                        </div>
                        <div className="flex flex-col space-y-4 mt-5 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                                Farm Image
                            </label>
                            <input
                                type="text"
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your farm image"
                            />
                        </div>
                     </div>
                </div> 
               
                <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-5">
                    Submit
                </button>

                </form>
            </div>
        

        </>
    );
    }

export default InputTea;