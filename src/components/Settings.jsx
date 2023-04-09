import React, { useState } from "react";
import Swal from "sweetalert2";

function Settings({ price, setPrice }) {

    const [message, setMessage] = useState("");

    const [milkPrice, setMilkPrice] = useState("");
    // POST price

    const inputPriceHandler = (e) => {
        setMilkPrice(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (milkPrice === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must enter a price!',
            })
            return;
        }
        const datat = {
            price_item: milkPrice,
        }
        fetch('http://localhost:9292/price/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datat)
        })
            .then((res) => res.json())
            .then((data) => {
                setPrice([...price, data]);
                setMessage(data.message);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,

                })
            })
            .catch((err) => {
                setMessage(err.message);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: err.message,

                })
            })
    }

    // delete price
    function deletePrice(id) {
        fetch(`http://localhost:9292/prices/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                setPrice(price.filter((pricing) => pricing.id !== id));
            })
    }

    return (
        <>
            <h1 className="text-3xl text-start font-bold mt-5">My Profile</h1>
            <div className=" h-1 bg-gray-300 rounded-full mt-4">
            </div>
            <div className="flex flex-col  h-screen w-screen bg-white ">
                <div className="flex flex-col ml-11 mt-2  bg-white h-full rounded-lg shadow-2xl w-2/3">
                    <div className="flex flex-col mt-9">
                        {/* image */}
                        <div className="flex flex-col items-center ">
                            <div className="items-center">
                                <img class="h-20 w-20 text-center rounded-full mb-5"></img>
                            </div>
                            {/* input of the first and second name and they should be in a row */}
                            <form className="flex flex-col items-center">
                                <div className="flex flex-row mt-4">
                                    <div className="flex flex-col mr-4">
                                        <input className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800" type="text" placeholder="First Name"></input>
                                    </div>
                                    <div className="flex flex-col">
                                        <input className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800" type="text" placeholder="Last Name"></input>
                                    </div>
                                </div>
                                {/* input of the email */}
                                <div className="flex flex-row mt-4">
                                    <div className="flex flex-col mr-4">
                                        <input className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800" type="email" placeholder="Email"></input>
                                    </div>
                                    {/* input of the password */}
                                    <div className="flex flex-col  ">
                                        <input className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800" type="text" placeholder="Phone Number"></input>

                                    </div>
                                </div>
                                {/* input of the confirm password */}
                                <div className="flex flex-row mt-4">
                                    <div className="flex flex-col mr-4">
                                        <input className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800" type="password" placeholder="Password"></input>

                                    </div>
                                    {/* input of the phone number */}
                                    <div className="flex flex-col ">
                                        <input className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800" type="password" placeholder="Confirm Password"></input>
                                    </div>
                                </div>
                                {/* BUTTON */}
                                <div className="flex flex-col mt-4">
                                    <button className="bg-gray-800 text-white p-2 rounded-lg w-40">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4 items-center ">
                        < div className="flex flex-row ">
                            <div className="flex flex-col mt-4 items-center ">
                                <div className="flex flex-col">
                                    <h1 className="text-gray-500  ">Current Tea Price: { }</h1>
                                </div>
                                <div className="flex flex-row mr-4 mt-4">
                                    <div className="flex flex-row mr-4">
                                        <input className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800 h-10 mx-4 w-20" type="number" placeholder="Price"></input>
                                        <button className="bg-gray-800 text-white p-2 rounded-lg w-20 ">Save</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4 items-center ">
                                <div className="flex flex-col">
                                    <h1 className="text-gray-500  ">Current Milk Price: { }</h1>
                                </div>
                                <div className="flex flex-row mr-4 mt-4">
                                    <div className="flex flex-row mr-4">
                                        <input className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800 h-10 mx-4 w-20" type="number" placeholder="Price"></input>
                                        <button className="bg-gray-800 text-white p-2 rounded-lg w-20 ">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* delete farm and animal */}
                    <div className="flex flex-col mt-4 items-center ">
                        < div className="flex flex-row ">
                            <div className="flex flex-col mt-4 items-center ">
                                <div className="flex flex-col">
                                    <h1 className="text-gray-500  ">Delete Tea Farm</h1>
                                </div>
                                <div className="flex flex-row mr-4 mt-4">
                                    <div className="flex flex-row mr-4">
                                        <select className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800 h-10 mx-4 w-20" type="text" placeholder="Farm">
                                            <option value="Farm">Farm</option>
                                            <option value="Farm">Farm</option>
                                            <option value="Farm">Farm</option>
                                            <option value="Farm">Farm</option>
                                        </select>
                                        <button className="bg-gray-800 text-white p-2 rounded-lg w-20 ">Delete</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4 items-center ">
                                <div className="flex flex-col">
                                    <h1 className="text-gray-500  ">Delete Cow</h1>
                                </div>
                                <div className="flex flex-row mr-4 mt-4">
                                    <div className="flex flex-row mr-4">
                                        <select className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-800 h-10 mx-4 w-20" type="text" placeholder="Farm">
                                            <option value="Farm">Cow 1</option>
                                            <option value="Farm">Cow 2</option>
                                            <option value="Farm">Cow 3</option>
                                            <option value="Farm">Cow 4</option>
                                        </select>
                                        <button className="bg-gray-800 text-white p-2 rounded-lg w-20 ">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Settings