import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import ClockHeading from './component/ClockHeading'
import ClockSlogen from './component/ClockSlogen'
import CurrentTime from './component/CurrentTime'

function App() {
  

  return (
    <>
    <center>

      <ClockHeading></ClockHeading>
      <ClockSlogen></ClockSlogen>
       <CurrentTime></CurrentTime>
    </center>
    </>
  )
}

export default App
