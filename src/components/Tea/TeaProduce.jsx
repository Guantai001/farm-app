import React from "react";
import TeaFarming from "./TeaFarming";

function TeaProduce() {

    return (
        <>
        <TeaFarming/>
        <div className="text-center">
        <h3 className="text-2xl text-center mt-9">
            Tea Farm Table
        </h3>
      <div class="flex flex-col justify-center mx-9">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 text-center mx-6">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full border text-center text-sm font-light dark:border-neutral-500 ">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
            <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Farm Image
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Month
              </th>

              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Farm Name
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Farm Location
              </th>
                <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Farm Tea Leaves Per Month
                </th>
            </tr>
          </thead>
          <tbody>
          <tr class="border-b dark:border-neutral-500">
                <td class="px-6 py-4 dark:border-neutral-500">
                <img class="h-10 w-10 rounded-full"></img>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Name</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Type</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Health</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Health</span>
                </td>
          
            </tr>
            <tr class="border-b dark:border-neutral-500">
                <td class="px-6 py-4 dark:border-neutral-500">
                <img class="h-10 w-10 rounded-full"></img>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Name</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Type</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Health</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Health</span>
                </td>           
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>

       
        </>
    )
}

export default TeaProduce
   