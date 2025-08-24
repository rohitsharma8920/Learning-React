
import { useState } from "react"
import Item from "./Item"
const FoodItem = ({items})=> {

    //  let foodItems = ['first item' , 'second item','third item' ,'four item']
    let [activeItems, setActiveItems] = useState([]);
    
    let onBuyButton = (item , event) =>{
      let newItems = [...activeItems ,item];
      setActiveItems(newItems)
    }

    return (

    <ul className="list-group">

        {items.map((item) =>(
         <Item
         key ={item}  
         foodItem = {item} 
         bought = {activeItems.includes(item)}
         handalclicking  = {(event) => onBuyButton(item,event)}

         ></Item>) )}
        
      </ul>
    )
}

export default FoodItem