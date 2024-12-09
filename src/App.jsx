import { useState , useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordgenrator = useCallback(()=>{
   let  pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed) str +="123456789"
   if(charAllowed) str +="!@#$^%&*_-[]{}~`"
   for(let i=1; i<=length;i++){
    let char = Math.floor(Math.random() * str.length + 1)

   
   pass  +=  str.charAt(char) 
   }
   setpassword (pass)

},[ length,numberAllowed,setcharAllowed,setpassword])

useEffect(()=>{
  passwordgenrator()

},[length,numberAllowed,charAllowed, passwordgenrator])
  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md 
            rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'
    >
      <h1
      className='text-3xl' 
      >password genrator</h1>
      <br />
      
      <div 
      className='flex shadow rounded-lg overflow-hidden mb-4'
      >
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
         />
         <button
         className='bg-blue-700 text-white-500 outline-none  shrink-0 ' 
         >copy</button>
      </div>

    <div
    className='flex text-sm gap-x-2 '>
      <div className='flex items-center gap-x-1'>
           <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
           onChange={(e)=>{setlength(e.target.value)}}
            />
             <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={numberAllowed}
        id='numberinput'
        onChange={()=>{
          setnumberAllowed((prev)=> !prev);
        }}/>
        <label htmlFor='numberinput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={numberAllowed}
        id='numberinput'
        onChange={()=>{
          setnumberAllowed((prev)=> !prev);
        }}/>
        <label htmlFor='numberinput'>characters</label>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
