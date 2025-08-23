 import TodoItem from "./TodoItem"
    function TodoItems({ todoItems }) {

        
    return <>
    {todoItems.map(item => (<TodoItem todoName= {item.name} todoDate={item.todoDate}></TodoItem>))}
            
            
        </>
    }

export default TodoItems