import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import AppName from './components/AppName'
import AddToDo from './components/AddToDo'
import AddItem1 from './components/TodoItem1'
import AddItem2 from './components/TodoItem2'
import './App.css'
function App() {

  return (
    <>
      <center class="todo-container">
        {/* <h1>Todo App</h1> */}

        <AppName></AppName>
        <AddToDo></AddToDo>
        
        <AddItem1></AddItem1>
        <AddItem2></AddItem2>

      

       
      </center>
    </>
  )
}

export default App
