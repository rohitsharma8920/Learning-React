
import  './App.css'
import Display from './component/Display'
import ButtonContainer from './component/ButtonContainer'
import { useState } from 'react'

function App() {

    const [calVal,setCalVal] = useState("")
    const onButtonClick = (buttonText) => {
        // console.log(buttonText)
        if(buttonText === 'C'){
            setCalVal("")

        }else if(buttonText === '='){
            const result = eval(calVal)
            setCalVal(result)
        }else{
            const newDisplayValue = calVal +buttonText
            setCalVal(newDisplayValue)
        }
    }

 return <>
 <center>
 <div className='calculator'>
  <Display displayValue = {calVal} ></Display>

  <ButtonContainer onButtonClick ={onButtonClick}></ButtonContainer>
 </div>
 </center>
 </>
}

export default App
