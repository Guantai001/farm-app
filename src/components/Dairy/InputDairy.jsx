import React, { useState } from "react";
import DairyFarming from "./DairyFarming";
import Swal from 'sweetalert2';


function InputDairy() {


    const successAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your cow has been added',
            showConfirmButton: false,
            timer: 1500
        })
    }


    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [health, setHealth] = useState("");
    const [age, setAge] = useState("");
    const [image, setImage] = useState("");
   const [allData, setAllData] = useState([]);



    const inputNameHandler = (e) => {
        setName(e.target.value);
    };

    const inputTypeHandler = (e) => {
        setType(e.target.value);
    };

    const inputHealthHandler = (e) => {
        setHealth(e.target.value);
    };

    const inputAgeHandler = (e) => {
        setAge(e.target.value);
    };

    const inputImageHandler = (e) => {
        setImage(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (name === "" || type === "" || health === "" || age === "" || image === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })
            return;
        }
        setAllData([ ...allData,{
                animal_name: name,
                animal_type: type,
                animal_health: health,
                animal_age: age,
                animal_image: image,
            },
        ]);
            setName("");
            setType("");
            setHealth("");
            setAge("");
            setImage("");

            fetch("http://localhost:9292/animal/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        animal_name: name,
                        animal_type: type,
                        animal_health: health,
                        animal_age: age,
                        animal_image: image,
                        }),
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        successAlert();
                    }
                    );


                   
    
    };

    console.log(allData);




    return (
        <>
            <DairyFarming />
            <div className="text-center">
                <h3 className="text-2xl text-center mt-9">
                    Add Cow 
                </h3>
                <form 
                onSubmit={submitHandler}
                className="mt-9">
                <div className="flex flex-col space-y-4 mt-9  mx-6">
                    <div className="flex flex-row space-y-2">
                        <div className="flex flex-col space-y-4 mt-4 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200 ">
                                Cow Name/Number
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={inputNameHandler}
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your cow name/number"
                            />
                        </div>

                        <div className="flex flex-col space-y-4 mt-4 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                               Cow Type
                            </label>
                            <input
                                type="text"
                                value={type}
                                onChange={inputTypeHandler}
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your cow type"
                            />
                        </div>

                        <div className="flex flex-col space-y-4 mt-4 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                                Cow Health
                            </label>
                            <input
                                type="text"
                                value={health}
                                onChange={inputHealthHandler}
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your cow health"
                            />
                        </div>
                    </div>
                </div>

                 <div className="flex flex-col space-y-4 mt-5 mx-6">
                     <div className="flex flex-row space-y-2"> 

                        <div className="flex flex-col space-y-4 mt-4 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                                Cow Age
                            </label>
                            <input
                                type="text"
                                value={age}
                                onChange={inputAgeHandler}
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your cow age"
                            />
                        </div>
                        <div className="flex flex-col space-y-4 mt-5 mx-5">
                            <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                                Cow Image
                            </label>
                            <input
                                type="text"
                                value={image}
                                onChange={inputImageHandler}
                                className="px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-2"
                                placeholder="Enter your cow image"
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
    )
}

export default InputDairy

