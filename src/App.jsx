import './App.css'
import Button from './components/button.jsx'
import { useState } from 'react'
function App(){
  let [counter1,setCounter1]=useState(0);
  let [counter2,setCounter2]=useState(0);
  return (
    <>
      <h1>Counter is {counter1}</h1>
      <p>Count is {counter1}</p>
      <div>
        <Button 
        text="increase"
        onClick={()=>{
          setCounter1(counter1+1)
        }}></Button>
        <Button 
        text="decrease"
        onClick={()=>{
          if(counter1==0){
            setCounter1(0);
          }else{
            setCounter1(counter1-1);
          }
        }}></Button>
        <Button 
        text="reset"
        onClick={()=>{
          setCounter1(0)
        }}></Button>
      </div>
      <input type="text" value="0"/>
      <Button text="Set to "></Button>
    </>
  )
}



export default App
