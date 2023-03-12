import React, { useState } from "react";
import DairyFarming from "./DairyFarming";
import Swal from 'sweetalert2';
import DatePicker from 'react-date-picker';
import moment from "moment";





function DairyTable({ dairy, setDairy, milk, setMilk }) {


    const [kg , setKg] = useState("");
    const [selectedAnimalId, setSelectedAnimalId] = React.useState(dairy.animal_id);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [message, setMessage] = useState("");


    function handleSelectChange(event) {
      setSelectedAnimalId(event.target.value);
    }

    const inputKgHandler = (e) => {
        setKg(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const dateWithoutTime = moment(selectedDate).startOf('day');
        const formattedDate = dateWithoutTime.format("YYYY-MM-DD");

        if (selectedDate === "" || kg === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })

            return;
        }

        const datat = {
            milk_date: formattedDate,
            milk_kgs: kg,
            animal_id: selectedAnimalId
        }

        fetch('http://localhost:9292/milk/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datat)
            
            
        })
       
        .then((res) => res.json())
        .then((data) => {
            setMessage(data.message);
            Swal.fire({
                position: 'center',
                title: data.message
            })

      
        })
        .catch((err) => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })
        console.log(datat);
    }
   
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    

    return (
      <>
      <DairyFarming/>
      <div className="text-center">
        <h3 className="text-2xl text-center mt-9">
            Dairy Table
        </h3>
      <div class="flex flex-col justify-center mx-9">
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
                Cow Image
              </th>

              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Cow Name/Number
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Cow Type
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Cow Health
              </th>
                <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Cow Age
                </th>
                <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                 Milk Kgs Per Day
                </th>
                <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Date
                </th>
            </tr>
          </thead>
          <tbody>
            {milk.map((dairy) => (
              <tr class="border-b dark:border-neutral-500">
                <td class="px-6 py-4 dark:border-neutral-500">
                  <img class="h-12 w-12 rounded-full" src={dairy.animal.animal_image} alt="Cow Image"  ></img>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                  <span class="text-gray-700 dark:text-gray-400">
                    {dairy.animal.animal_name}
                  </span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                  <span class="text-gray-700 dark:text-gray-400">
                    {dairy.animal.animal_type}
                  </span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                  <span class="text-gray-700 dark:text-gray-400">
                    {dairy.animal.animal_health}
                  </span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                  <span class="text-gray-700 dark:text-gray-400">
                    {dairy.animal.animal_age}
                  </span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                  <span class="text-gray-700 dark:text-gray-400">
                    {dairy.milk_kgs}
                  </span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                  <span class="text-gray-700 dark:text-gray-400">
                    {dairy.milk_date}
                  </span>
                </td>
              </tr>
            ))
              }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>

{/* input of milk per day */}

<div class="flex flex-col w-full ">
    <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Input Milk Per Day
    </h1>
    <div class="flex  p-8 justify-center">

    <form 
    onSubmit={submitHandler}
    class="w-full max-w-lg items-center">
      <div >
        <div class="flex flex-row -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Cow ID
                </label>
                <div class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                    <div class="">
                      <select  value={selectedAnimalId} onChange={handleSelectChange}
                     >
                  <option value="" >-- Select --</option>
                        { dairy.map((dairy) => (
                          <option 
                          key={dairy.animal_id} 
                          value={
                            dairy.id
                          }>{dairy.animal_name}</option>
                        ))}
    
                      </select>
                    </div>
                  </div>
                {/* <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Cow ID"></input> */}
            </div>
            <div class="w-full  px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Milk Per Day
                </label>
                <input 
                value={kg}
                onChange={inputKgHandler}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Milk Per Day"></input>
            </div>
            <div class="w-full  px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Date
                </label>
                <DatePicker
                // take the year, month and day from the date only not the time
                          
                className= "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 value={selectedDate} 
                 selected={selectedDate}
                 onChange={handleDateChange}
                 dateFormat="yyyy/MM/dd"
                 />
            </div>
        </div>
       <button 
       type="submit"
       disabled={!selectedAnimalId}
       class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-2 mx-9">
                    Submit
                </button>
       </div>

        </form>


   </div>
</div>


        </>
    );
}

export default DairyTable;
                       