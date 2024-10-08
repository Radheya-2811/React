import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const[length, setLength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(true);
  const[Password,setPassword]=useState("");

  const passwordReference=useRef(null)

  const copyPassToClipboard=useCallback(()=>{
    passwordReference.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      if(numberAllowed) str+="1234567890"
      if(charAllowed) str+="!@#$%^&*()_+={}[]|?><.,_"

      for (let index = 1; index <=length; index++){
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);       
      }
      setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
      passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
 
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-9 text-orange-500 bg-gray-800'>
        <h1 className='text-red text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text"
            value={Password}
            placeholder='password'
            readOnly
            ref={passwordReference}
            className='outline-none w-full py-1 px-3' />

            <button
            onClick={copyPassToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                  <input type="range"
                     min={6}
                     max={25}
                     value={length}
                     className='cursor-pointer'
                     onChange={(event)=>{
                        setLength(event.target.value)
                     }} 
                   />
                   <label>Length : {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                    defaultChecked={charAllowed}
                    id='characterInput'
                    onChange={()=>{
                      setcharAllowed((prev)=>!prev)
                    }}
                   />
                  <label htmlFor='characterInput'>Char</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                    defaultChecked={numberAllowed}
                    id='numberInput'
                    onChange={()=>{
                      setnumberAllowed((prev)=>!prev)
                    }}
                   />
                  <label htmlFor='numberInput'>Number</label>
              </div>
          </div>
      </div>
    </>
  )

}

export default App
