import React,{useState} from "react";
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
            {/* simple setting that you are able to input milk  price  */}

            <div className="flex flex-row space-x-4 mt-5 ">
                <div className="flex flex-col ">
                    <h1 className="text-4xl font-bold">Settings</h1>
                    <p className="text-gray-500 mx-5">Set your price</p>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mt-4" />
            {/* row */}


            <div className="flex flex-row space-x-4 mt-5 ">
                <form
                    onSubmit={submitHandler}
                 className="flex flex-row space-x-4 mt-5 ">
                    <div className="flex flex-row space-x-4 mt-5 ">
                        <div className="flex flex-col ">
                            <h1 className="text-4xl font-bold">Milk Price</h1>
                            <p className="text-gray-500 mx-5">Set your milk price</p>
                            <input 
                            value={milkPrice}
                            onChange={inputPriceHandler}
                            type="text" placeholder="Milk Price" className="border-2 border-gray-400 rounded-lg w-96 h-10 mt-5"></input>
                            <button 
                            type="submit"
                            class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-5">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

                {/* get the current and a delete button for current price */}
                <div className="flex flex-row space-x-4 mt-9 ">
                    <div className="flex flex-col ">
                        <h1 className="text-4xl font-bold">Current Milk Price</h1>
                        {price.map((pricing) => (
                            <div className="flex flex-row space-x-4 mt-5 ">
                                <div className="flex flex-col ">
                                    <p className="text-gray-500 mx-5">Current Milk Price: {pricing.price_item}</p>
                                </div>



                                <button
                                
                                    onClick={() => deletePrice(pricing.id)}
                                    class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-5">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="border-2 border-gray-400 mt-4" />
            {/* row */}
            <div className="flex flex-row space-x-4 mt-5 ">
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
                <div className="flex flex-row space-x-4 mt-9 ">
                    <div className="flex flex-col ">
                        <h1 className="text-4xl font-bold">Current Milk Price</h1>
                        <p className="text-gray-500 mx-5">Current Milk Price</p>
                        <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-5">
                            Delete Price
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Settings