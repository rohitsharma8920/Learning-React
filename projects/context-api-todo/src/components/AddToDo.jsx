import { useState, useRef, useContext} from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

function AddToDo({onNewItem}){
  const {addNewItem} = useContext(TodoItemsContext)
  // const [todoName,setTodoName] = useState()
  // const [dueDate,setDueDate] = useState()
  const todoNameElement =useRef()
  const dueDateElement =useRef()



  // const handalNameChange = (event)=>{
  //   setTodoName(event.target.value);
  //   noOfUpdates.current +=1;
  // }
  // const handalDateChange = (event)=>{
  //   setDueDate(event.target.value);
  //   console.log(`no. of updates are : ${noOfUpdates}`)
  // }


  const handalAddButtonClicked=()=>{
    const todoName = todoNameElement.current.value
    const dueDate = dueDateElement.current.value
    todoNameElement.current.value =""
    dueDateElement.current.value=""
    // console.log(`${todoName} due on :${dueDate}`);
    addNewItem(todoName,dueDate);
    // setDueDate("");
    // setTodoName("");

    
  }


    return(
    <div className="container text-center">
    <div className="row">
      <div className="col-6">
        <input type="text" 
        ref={todoNameElement}
        // value={todoName}
         placeholder='Enter Todo Here' 
        // onChange={handalNameChange}
        />
      </div>

      <div className="col-4">
        <input type="date" 
        // value={dueDate}
        ref={dueDateElement}
        // onChange={handalDateChange}
         />
      </div>

      <div className="col-2">
        <button type='button'
        className = "btn btn-success kg-button"
        onClick={handalAddButtonClicked}
        
        ><MdOutlineAddCircle /></button>
      </div>
    </div>
  </div>
    )
}

export default AddToDo;