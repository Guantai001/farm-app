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
import Login from './access/Login';
import SignUp from './access/SignUp';


function Main(){

  const [dairy, setDairy] = useState([]);
  const [milk, setMilk] = useState([]);
  const [cost, setCost] = useState([]);
  const [sell, setSell] = useState([]);
  const [price, setPrice] = useState([]);

  // fetching the cow/animal data
  useEffect(() => {
    fetch('/animals')
      .then((res) => res.json())
      .then((data) => {
        setDairy(data);
      });
  }, []);

  // fetching the milk data
  useEffect(() => {
    fetch('/milks')
      .then((res) => res.json())
      .then((data) => {
        setMilk(data);
      });
  }, []);

  // fetching the cost data
  useEffect(() => {
    fetch('/costs')
      .then((res) => res.json())
      .then((data) => {
        setCost(data);
      });
  }, []);

  // fetching the sell data
  useEffect(() => {
    fetch('/sells')
      .then((res) => res.json())
      .then((data) => {
        setSell(data);
      });
  }, []);

// // get current price
 
//   useEffect(() => {
//     fetch('/prices')
//       .then((res) => res.json())
//       .then((data) => {
//         setPrice(data);
//         console.log(data);
//       });
//   }, []);


  return (
<>
   <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setting"element={<Settings price={price} setPrice={setPrice}/>} />
        <Route path="/inputs" element={<InputTea />} />
        <Route path="/put" element={<InputDairy />} />
        <Route path="/table"element={<DairyTable dairy= {dairy} setDairy={setDairy}milk={milk} setMilk={setMilk}/>} />
        <Route path="/produce" element={<Produce cost={cost} setCost={setCost}sell={sell} setSell={setSell}/>} />
        <Route path="/tea" element={<TeaTable/>} />
        <Route path="/teaproduce" element={<TeaProduce/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />

  </Routes>

</>
  )
}

export default Main;