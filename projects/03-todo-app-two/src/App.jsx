import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import AppName from './components/AppName'
import AddToDo from './components/AddToDo'

import AddItem from './components/TodoItem'
import './App.css'

function App() {

  return (
    <>
      <center class="todo-container">
        {/* <h1>Todo App</h1> */}

        <AppName></AppName>
        <AddToDo></AddToDo>
        
        <AddItem todoName = 'Buy Milk' todoDate = '04/07/2025'></AddItem>
        <AddItem todoName = 'Go to Collage' todoDate = '04/07/2025'></AddItem>

      

       
      </center>
    </>
  )
}

export default App
