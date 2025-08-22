
import Item from "./Item"
const FoodItem = ({items})=> {

    //  let foodItems = ['first item' , 'second item','third item' ,'four item']

    return (

    <ul className="list-group">

        {items.map((item) =>(<Item key ={item} foodItem = {item}></Item>) )}
        
      </ul>
    )
}

export default FoodItem