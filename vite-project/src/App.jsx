import { useState } from "react"

function App() {
 const [counter, setCounter] = useState(0)
 
 function addValue(){
  if(counter==5){
    setCounter(counter)
  }else{
    setCounter(counter+1);
  }
 }

 function decValue(){
  counter==0 ? setCounter(counter):setCounter(counter-1);
  
 }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline">Counter Project</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={decValue}>Decrement Value</button>
        
      </div>
      
    </>
  )
}

export default App
