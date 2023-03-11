import React from "react";
import DairyFarming from "./DairyFarming";

function Produce() {
    return (
        <>
        <DairyFarming />
   {/* create a table  */}
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
                Date
                </th>
                <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Cow Milk in Litres
                </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b dark:border-neutral-500">
                <td class="px-6 py-4 dark:border-neutral-500">
                <img
                    class="h-10 w-10 rounded-full"
                    ></img>
                </td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
                </div>
        




</>
    );
}

export default Produce;
