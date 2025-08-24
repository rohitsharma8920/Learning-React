 import TodoItem from "./TodoItem"
    function TodoItems({ todoItems ,onDeleteClick }) {

        
    return <>

    {todoItems.map(item => (<TodoItem todoName= {item.name} todoDate={item.todoDate} onDeleteClick = {onDeleteClick}></TodoItem>))}
            
            
        </>
    }

export default TodoItems