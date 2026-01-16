import './App.css'
import Button from './components/button.jsx'
import { useState } from 'react'
function App(){
  return (
    <>
      <h1>Counter is </h1>
      <p>Count is </p>
      <div>
        <Button text="increase"></Button>
        <Button text="decrease"></Button>
        <Button text="reset"></Button>
      </div>
      <input type="text" value="0"/>
      <Button text="Set to "></Button>
    </>
  )
}



export default App
