 import { useContext} from "react"
import { TodoItemsContext } from "../store/todo-item-store"
 import TodoItem from "./TodoItem"


    function TodoItems() {

    const {todoItems , deleteItem} = useContext(TodoItemsContext)
   

    return <>
    
    {todoItems.map(item => (
    <TodoItem 
        todoName= {item.name}
        todoDate={item.todoDate} 
        onDeleteClick = {deleteItem}
     ></TodoItem>))}
            
            
        </>
    }

export default TodoItems