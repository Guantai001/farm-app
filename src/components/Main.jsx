import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import InputTea from "./Tea/InputTea";
import InputDairy from "./Dairy/InputDairy";
import DairyTable from "./Dairy/DairyTable";
import Produce from "./Dairy/Produce";
import TeaTable from "./Tea/TeaTable";
import TeaProduce from "./Tea/TeaProduce";

function Main(){

  return (
<>
   <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/tea" element={<TeaFarming />} /> */}
        {/* <Route path="/dairy" element={<DairyFarming />} /> */}
        <Route path="/setting" element={<Settings />} />
        <Route path="/inputs" element={<InputTea />} />
        <Route path="/put" element={<InputDairy />} />
        <Route path="/table" element={<DairyTable/>} />
        <Route path="/produce" element={<Produce/>} />
        <Route path="/tea" element={<TeaTable/>} />
        <Route path="/teaproduce" element={<TeaProduce/>} />

  </Routes>

</>
  )
}

export default Main;