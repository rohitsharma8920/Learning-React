import './FoodInput.css'
const FoodInput =({handalKeyDown})=>{

   
    return (
        <div className="input">

            <input type="text" placeholder="enter"
            onKeyDown={handalKeyDown}
            />
        </div>
         
    )
}
export default FoodInput