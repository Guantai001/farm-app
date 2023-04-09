import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";


const labels = ["January", "February", "March", "April", "May", "June", "July" , "August" , "September" , "October" , "November" , "December"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45, 50, 60, 70, 80, 90],
    },
  ],
};

const Dashboard = () => {
    return (
        <>

        <div className="flex flex-row space-x-4 mt-5 ">
          <div>
          <img class="h-20 w-20 rounded-full"></img>
          </div>
            <div className="flex flex-col ">
                <h1 className="text-4xl font-bold">Hi, Guantai</h1>
                <p className="text-gray-500 mx-5">Welcome back to your dashboard</p>
            </div>
        </div>
        <hr className="border-2 border-gray-400 mt-4" />

<div className="flex w-100% flex-row space-x-4 mt-5 ml-11">
<div class="overflow-hidden rounded-lg shadow-lg mt-9 mx-9 w-96 h-80">
  <div class="bg-neutral-50 py-4 px-9 dark:bg-neutral-900 dark:text-neutral-800">
    Dairy chart
  </div>
  <Line data={data} />
</div>
<div class="overflow-hidden rounded-lg shadow-lg mt-9 w-96 h-80 mx-9 ">
  <div
    class="bg-neutral-50 py-4 px-9 dark:bg-neutral-900 dark:text-neutral-800">
    Tea chart
  </div>
  <Line data={data} />
</div> 
</div>
        </>

    );
    }

export default Dashboard;