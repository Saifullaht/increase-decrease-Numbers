import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 


function App() {
  
    
  let [ counter , setCounter] = useState(null);
  const addvalue = () => {
    setCounter(counter + 1);
    console.log(counter ); 
    
    };
  
    
  let [ deccounter, setdecrase] = useState(null);
  const Decreasevalue = () => {
    setCounter(counter - 1);
    console.log(counter ); 
    
    };
  return (
    <>
    
    <h1>Increase and Decrease Value</h1>
    <h2> Counter-Value : <span className='target'> {counter}</span></h2>
      <button onClick={addvalue}> Increase-Value </button>
      <button onClick={Decreasevalue}> Decrease-Value  </button>
    </>
  )
}

export default App
