import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import TeaFarming from "./Tea/TeaFarming";
import InputTea from "./Tea/InputTea";
import InputDairy from "./Dairy/InputDairy";
import DairyTable from "./Dairy/DairyTable";
import Produce from "./Dairy/Produce";

function Main(){

  return (
<>
   <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tea" element={<TeaFarming />} />
        {/* <Route path="/dairy" element={<DairyFarming />} /> */}
        <Route path="/setting" element={<Settings />} />
        <Route path="/inputs" element={<InputTea />} />
        <Route path="/put" element={<InputDairy />} />
        <Route path="/table" element={<DairyTable/>} />
        <Route path="/produce" element={<Produce/>} />
  </Routes>

</>
  )
}

export default Main;