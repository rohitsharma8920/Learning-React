import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import FoodItem from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";

function App() {

  let foodItem = []
  // let foodItem = []

  

  return (
    <>
      <h1>Healthy Food</h1>


     <ErrorMessage items = {foodItem}></ErrorMessage> 
      <FoodItem items = {foodItem}></FoodItem>
    </>
  );
}

export default App;
