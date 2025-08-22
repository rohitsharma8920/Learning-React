import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Hello from './hello'
import Reuse from './Reusable_test'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h4>this is app component page</h4>
   <Hello/>
   <Reuse></Reuse>
   <Reuse></Reuse>
   <Reuse></Reuse>
   <Reuse></Reuse>
   </>
  )
}

export default App
