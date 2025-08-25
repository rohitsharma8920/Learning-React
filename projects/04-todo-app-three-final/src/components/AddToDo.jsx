import { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

function AddToDo({onNewItem}){
  const [todoName,setTodoName] = useState()
  const [dueDate,setDueDate] = useState()

  const handalNameChange = (event)=>{
    setTodoName(event.target.value);
  }
  const handalDateChange = (event)=>{
    setDueDate(event.target.value);
  }

  const handalAddButtonClicked=()=>{
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }


    return(
    <div className="container text-center">
    <div className="row">
      <div className="col-6">
        <input type="text" value={todoName} placeholder='Enter Todo Here' onChange={handalNameChange}/>
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handalDateChange} />
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