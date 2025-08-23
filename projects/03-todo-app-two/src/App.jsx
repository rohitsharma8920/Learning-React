import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import AppName from './components/AppName'
import AddToDo from './components/AddToDo'

import AddItem from './components/TodoItem'
import './App.css'
import TodoItems from './components/TodoItems'


function App() {

  const todoitems = [
    {
      name : 'Buy Milk',
      todoDate:'04/07/2025'
    },
    {
      name : 'Go to Collage',
      todoDate:'04/07/2025'
    },
    {
      name : 'Playing Cricket',
      todoDate:'64/07/2025'
    },
    
  ]
  return (
    <>
      <center className="todo-container">
        {/* <h1>Todo App</h1> */}

        <AppName></AppName>
        <AddToDo></AddToDo>
        
        <TodoItems todoItems ={todoitems}></TodoItems>
        {/* <TodoItems todoItems ={todoitems}></TodoItems> */}
        

      

       
      </center>
    </>
  )
}

export default App
