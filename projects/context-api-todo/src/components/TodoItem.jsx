import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { TodoItemsContext } from "../store/todo-item-store";
function TodoItem({todoDate,todoName ,onDeleteClick}){

  const {deleteItem} = useContext(TodoItemsContext)
    // let todoName = 'Buy Milk';
    // let date = '04/07/2025'
  
    return (
    <div className="container text-center">
          <div className="row">
            <div className="col-6">
             {todoName}
            </div>
            <div className="col-4">{todoDate}
            </div>
            <div className="col-2">
              <button type='button' className = "btn btn-danger kg-button" onClick = {()=>deleteItem(todoName)}><FaDeleteLeft /></button>
            </div>
          </div>
        </div>
        )
}


export default TodoItem