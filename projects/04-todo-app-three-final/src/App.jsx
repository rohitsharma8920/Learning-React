import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import AppName from './components/AppName'
import AddToDo from './components/AddToDo'

import AddItem from './components/TodoItem'
import './App.css'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage'
import TodoItem from './components/TodoItem'


function App() {


    const [todoitems,setTodoItems] = useState([])

    const handalNewItem = (itemName ,ItemDueDate) => {
      console.log(`new item added ${itemName} Date : ${ItemDueDate}`);
      const newTodoItems = [...todoitems ,{name:itemName ,todoDate:ItemDueDate}]
      setTodoItems(newTodoItems)
    }


    const handalAddButtonItem = (todoItemName)=>{
      const newTodoItems = todoitems.filter(item =>item.name != todoItemName)
      setTodoItems(newTodoItems)
      console.log(`item deleted: ${todoItemName}`);
    }
  return (
    <>
      <center className="todo-container">
        {/* <h1>Todo App</h1> */}

        <AppName></AppName>
        <AddToDo onNewItem = {handalNewItem}></AddToDo>
        {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems todoItems ={todoitems} onDeleteClick = {handalAddButtonItem}></TodoItems>

        {/* <TodoItems todoItems ={todoitems}></TodoItems> */}
        

      

       
      </center>
    </>
  )
}

export default App
