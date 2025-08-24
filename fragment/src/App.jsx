

import FoodItem from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";

function App() {

  // let foodItem = ['first item' , 'second item','third item' ,'four item']
  // let foodItem = []

  // let textStateArr = useState("Food item enter by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow,setTextState] = useState();
  let [foodItem ,setFoodItems ] = useState([])


  // console.log(`currret value of textState${textToShow}`);

   const onkeydown =(event) => {

    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = ''
      let newItems = [...foodItem ,newFoodItem]
      setFoodItems(newItems)
      console.log(newFoodItem)
    }
    //  console.log(event)
    //  setTextState(event.target.value)
   }
  


  return (
    <Container>
      <h1 className="app-heading">Healthy Food</h1>

      <FoodInput handalKeyDown ={onkeydown}
      
      ></FoodInput>
      <ErrorMessage items = {foodItem}></ErrorMessage> 
      <FoodItem items = {foodItem}></FoodItem>
   
    </Container>
  );
}

export default App;
