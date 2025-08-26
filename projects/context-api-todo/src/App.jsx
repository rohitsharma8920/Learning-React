import { useState ,useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AppName from './components/AppName'
import AddToDo from './components/AddToDo'

import AddItem from './components/TodoItem'
import './App.css'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage'
import TodoItem from './components/TodoItem'
import { TodoItemsContext } from './store/todo-item-store'


const todoItemsReducer = (currTodoItmes, action) => {
  let newTodoItems =  currTodoItmes
  if(action.type === 'NEW_ITEM'){
    const newTodoItems = [...currTodoItmes,
      {name:action.payload.ItemDueDate,
      dueDate:action.payload.ItemDueDate}]
    
  }else if(action.type === 'DELETE_ITEM'){
    newTodoItems = currTodoItmes.filter((item) => item.neame !== action.payload.itemName
  )}
  return newTodoItems;
}


function App() {


    // const [todoItems,setTodoItems] = useState([])
    const [todoItems , dispatchTodoItems] = useReducer(todoItemsReducer ,[]) //reducer

    const addNewItem = (itemName ,ItemDueDate) => {

      const newItemAction = {
        type :"NEW_ITEM",
        payload:{
          itemName,
          ItemDueDate
        }
      }
      dispatchTodoItems(newItemAction)
    }

      const deleteItem = (todoItemName)=> {
      eleteItemAction = {
        type :"DELETE_ITEM",
        payload:{
          itemName:todoItemName,
        }
      }
      dispatchTodoItems(deleteItemAction)
      };
      // console.log(`new item added ${itemName} Date : ${ItemDueDate}`);
    /*  const newTodoItems = [...todoItems,{name:itemName ,todoDate:ItemDueDate}]
      setTodoItems(newTodoItems)*/

   

    // const deleteItem = (todoItemName)=>{
    //   const newTodoItems = todoItems.filter(item =>item.name !== todoItemName)
    //   setTodoItems(newTodoItems)
    //   console.log(`item deleted: ${todoItemName}`);
    // }

    // const defaultTodoItems = [
    //   // {name : "buy ghee" , dueDate : "today"}
    // ]

  return (
    <>
    <TodoItemsContext.Provider value={ {
      todoItems,
      // addNewItem,
      // deleteItem 
      dispatchTodoItems
      }}
      >
      <center className="todo-container">
        {/* <h1>Todo App</h1> */}

        <AppName></AppName>
        <AddToDo></AddToDo>
        {<WelcomeMessage ></WelcomeMessage>}

        <TodoItems  ></TodoItems>

        {/* <TodoItems todoItems ={todoitems}></TodoItems> */}
        
       
      </center>
      </TodoItemsContext.Provider>
    </>
  )
}

export default App
