import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=1;
  
  const [counter,setCounter]=useState(1)
  const addValue=()=>{
    setCounter(counter+1);

  }
  const subValue=()=>{
    if(counter==0){
      setCounter(0);
    }
    else{
      setCounter(counter-1)
    }
    
  }

  return (
    <>
        Hello World!: {counter}
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br/>
        <button onClick={subValue}>Remove Value</button>
        <p>{counter}</p>
    </>
  )
}

export default App
