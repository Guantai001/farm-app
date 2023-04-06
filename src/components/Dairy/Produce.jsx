import React, { useState } from "react";
import DairyFarming from "./DairyFarming";
import Swal from 'sweetalert2';
import DatePicker from 'react-date-picker';
import moment from "moment";



function Produce({ cost, sell}) {


    // cost 
    const [costDate, setCostDate] = useState(new Date());
    const [costName, setCostName] = useState("");
    const [costAmount, setCostAmount] = useState("");


    function handleCostDateChange(date) {
        setCostDate(date);
    }

    const inputCostNameHandler = (e) => {
        setCostName(e.target.value);
    };

    const inputCostAmountHandler = (e) => {
        setCostAmount(e.target.value);
    };

    const submitCostHandler = (e) => {
        e.preventDefault();

        const dateWithoutTime = moment(costDate).startOf('day');
        const formattedDate = dateWithoutTime.format("YYYY-MM-DD");
        
        if (costDate === "" || costName === "" || costAmount === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })

            return;
        }

        const dat = {
            cost_date: formattedDate,
            cost_item: costName,
            cost_price: costAmount
        }

        fetch('http://localhost:9292/cost/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dat)
        })
        .then((res) => res.json())
        .then((data) => {
         console.log(data);
         Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Cost added successfully!',
         })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })

        setCostDate("");
        setCostName("");
        setCostAmount("");
    }

    // sell
    const [sellDate, setSellDate] = useState(new Date());
    const [sellName, setSellName] = useState("");
    const [sellAmount, setSellAmount] = useState("");

    function handleSellDateChange(date) {
        setSellDate(date);
    }

    const inputSellNameHandler = (e) => {
        setSellName(e.target.value);
    };

    const inputSellAmountHandler = (e) => {
        setSellAmount(e.target.value);
    };

    const submitSellHandler = (e) => {
        e.preventDefault();

        const dateWithoutTime = moment(sellDate).startOf('day');
        const formattedDate = dateWithoutTime.format("YYYY-MM-DD");

        if (sellDate === "" || sellName === "" || sellAmount === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })

            return;
        }

        const dat = {
            sold_date: formattedDate,
            sold_item: sellName,
            sold_price: sellAmount
        }

        fetch('http://localhost:9292/sell/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dat)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Sell added successfully!',
            })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })
        setSellDate("");
        setSellName("");
        setSellAmount("");
    }




    return (
        <>
        <DairyFarming />

   <div className="text-center ml-11">
        <h3 className="text-2xl text-center mt-9">
            Dairy Table
        </h3>
      <div class="flex flex-col text-center mx-9">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 text-center mx-6">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table
                    class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                    <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Month
                            </th>

                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Total Milk Produced
                            </th>
                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Total Milk Sold
                            </th>
                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Other Income
                            </th>
                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Total Cost Used
                            </th>

                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Total Profit
                            </th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-neutral-500">
                            <td class="px-6 py-4 dark:border-neutral-500">
                                January
                            </td>
                            <td class="px-6 py-4 dark:border-neutral-500">
                                1000
                            </td>
                            <td class="px-6 py-4 dark:border-neutral-500">
                                900
                            </td>
                            <td class="px-6 py-4 dark:border-neutral-500">
                                900
                            </td>

                            <td class="px-6 py-4 dark:border-neutral-500">
                                100
                            </td>
                            <td class="px-6 py-4 dark:border-neutral-500">
                                100
                            </td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                            <td class="px-6 py-4 dark:border-neutral-500">
                                February
                            </td>
                            <td class="px-6 py-4 dark:border-neutral-500">
                                1000
                            </td>
                            <td class="px-6 py-4 dark:border-neutral-500">
                                900
                            </td>
                            <td class="px-6 py-4 dark:border-neutral-500">
                                900
                            </td>
                            <td class="px-6 py-4 dark:border-neutral-500">
                                100
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<hr class="border-gray-200 dark:border-gray-700 my-6" />


{/* Utily Table */}
{/* Row */}
<div class="flex flex-row -mx-3 items-center ml-11 mb-6">

<div className="text-center ml-11">
<div class="flex flex-col w-full ">
    <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Utility Table
    </h1>
    <div class="flex  p-8 text-center">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 text-center mx-6">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table
                    class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                    <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Date
                            </th>

                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Utility
                            </th>
                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Cost
                            </th>
                            </tr>
                    </thead>
                    <tbody>
                    
                    {
                        cost.map((item, index) => {
                            return (
                                <tr class="border-b dark:border-neutral-500">
                                    <td class="px-6 py-4 dark:border-neutral-500">
                                        {item.cost_date}
                                    </td>
                                    <td class="px-6 py-4 dark:border-neutral-500">
                                        {item.cost_item}
                                    </td>
                                    <td class="px-6 py-4 dark:border-neutral-500">
                                        {item.cost_price}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                </div>
                </div>
                </div>

        </div>
        </div>

</div>

{/*  */}
<div className="text-center">
<div class="flex flex-col text-center w-full ">
    <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Sells Table
    </h1>
    <div class="flex  p-8 justify-center">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 text-center mx-6">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table
                    class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                    <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Date
                            </th>

                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Sold Item
                            </th>
                            <th
                                scope="col"
                                class="border-r px-6 py-4 dark:border-neutral-500">
                                Cost
                            </th>
                            </tr>
                    </thead>
                    <tbody>
                  { 
                    sell.map((item, index) => {
                        return (
                            <tr class="border-b dark:border-neutral-500">
                                <td class="px-6 py-4 dark:border-neutral-500">
                                    {item.sold_date}
                                </td>
                                <td class="px-6 py-4 dark:border-neutral-500">
                                    {item.sold_item}
                                </td>
                                <td class="px-6 py-4 dark:border-neutral-500">
                                    {item.sold_price}
                                </td>
                            </tr>
                        )})}
                    </tbody>
                </table>

                </div>
                </div>
                </div>

        </div>
        </div>
</div>

</div>
<hr class="border-gray-200 dark:border-gray-700 my-6" />
{/* input the cost used per month and price */}
<div class="flex flex-col w-full ">
    <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Cost Used Per Month
    </h1>
    <div class="flex  p-8 justify-center">
    <form 
    onSubmit={submitCostHandler}
    class="w-full max-w-lg items-center">
       
       <div >
         <div class="flex flex-row -mx-3 mb-6">
             <div class="w-full px-3 mb-6 md:mb-0">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                     Utility    
             </label>
                 <input 
                   value={costName}
                     onChange={inputCostNameHandler}
                 class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Utility"></input>
             </div>
             <div class="w-full  px-3">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Cost Used
                 </label>
                 <input 
                    value={costAmount}
                    onChange={inputCostAmountHandler}
                 class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Cost used"></input>
             </div>
             <div class="w-full  px-3">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                 Date
                 </label>
                 <DatePicker
                    selected={costDate}
                    onChange={handleCostDateChange}
                    dateFormat="dd/MM/yyyy"
                    value={costDate}
                className= "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          
                 />
             </div>
         </div>
        <button
                    type="submit"
         class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-2 mx-9">
                     Submit
                 </button>
        </div>
 
         </form>
    </div>            
</div>
{/* Sells Per Month */}
<hr class="border-gray-200 dark:border-gray-700 my-6" />

<div class="flex flex-col w-full ">
    <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Sells Per Month
    </h1>
    <div class="flex  p-8 justify-center">
    <form
    onSubmit={submitSellHandler}
    class="w-full max-w-lg items-center">
       
       <div >
         <div class="flex flex-row -mx-3 mb-6">
             <div class="w-full px-3 mb-6 md:mb-0">
                 <label
                 class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                     Sold Item
             </label>
                 <input 
                    value={sellName}
                    onChange={inputSellNameHandler}
                 class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="sold Item"></input>
             </div>
             <div class="w-full  px-3">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Cost Sold
                 </label>
                 <input
                    value={sellAmount}
                    onChange={inputSellAmountHandler}
                 class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Cost Sold"></input>
             </div>
             <div class="w-full  px-3">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                 Date
                 </label>
                 <DatePicker
                      selected={sellDate}
                      onChange={handleSellDateChange}
                      dateFormat="dd/MM/yyyy"
                      value={sellDate}
                   className= "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                 />
                
             </div>
         </div>
        <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-2 mx-9">
                     Submit
                 </button>
        </div>
 
         </form>

    
    </div>                       
</div>
</div>

</>
    );
}

export default Produce;
