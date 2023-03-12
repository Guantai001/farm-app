import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Settings from "./Settings";
import InputTea from "./Tea/InputTea";
import InputDairy from "./Dairy/InputDairy";
import DairyTable from "./Dairy/DairyTable";
import Produce from "./Dairy/Produce";
import TeaTable from "./Tea/TeaTable";
import TeaProduce from "./Tea/TeaProduce";

function Main(){

  const [dairy, setDairy] = useState([]);
  const [milk, setMilk] = useState([]);
  const [cost, setCost] = useState([]);
  const [sell, setSell] = useState([]);

  // fetching the cow/animal data
  useEffect(() => {
    fetch('http://localhost:9292/')
      .then((res) => res.json())
      .then((data) => {
        setDairy(data);
      });
  }, []);

  // fetching the milk data
  useEffect(() => {
    fetch('http://localhost:9292/milk')
      .then((res) => res.json())
      .then((data) => {
        setMilk(data);
      });
  }, []);

  // fetching the cost data
  useEffect(() => {
    fetch('http://localhost:9292/cost')
      .then((res) => res.json())
      .then((data) => {
        setCost(data);
        console.log(data);
      });
  }, []);

  // fetching the sell data
  useEffect(() => {
    fetch('http://localhost:9292/sell')
      .then((res) => res.json())
      .then((data) => {
        setSell(data);
        console.log(data);
      });
  }, []);






  return (
<>
   <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/inputs" element={<InputTea />} />
        <Route path="/put" element={<InputDairy />} />
        <Route path="/table"
          element={<DairyTable 
          dairy= {dairy} setDairy={setDairy}
          milk={milk} setMilk={setMilk}
         />} />
        <Route path="/produce" 
        element={<Produce
        cost={cost} setCost={setCost}
        sell={sell} setSell={setSell}
        />} />
        <Route path="/tea" element={<TeaTable/>} />
        <Route path="/teaproduce" element={<TeaProduce/>} />

  </Routes>

</>
  )
}

export default Main;