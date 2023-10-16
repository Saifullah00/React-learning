import { useState } from 'react'


function App() {
  const [colour, setColour] = useState('olive')

  return (
    
      <div className='w-full h-screen duration-200' 
      style={{backgroundColor: colour}}>
        
        <div className='fixed rounded flex flex-wrap justify-center bottom-12 inset-x-0 mx-1 px-1'>
          <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button 
            onClick={()=> setColour("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}            
            > Red</button>

            <button 
            onClick={()=>setColour("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "green"}}            
            > Green</button>
            
            <button 
            onClick={()=>setColour("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "blue"}}            
            > Blue</button>

            <button 
            onClick={()=>setColour("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "black"}}            
            > Black</button>

            <button
            onClick={()=>setColour("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:'yellow'}}
            >Yellow</button>

            <button
            onClick={()=>setColour("pink")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:'pink'}}
            >Pink</button>
          
          </div>
         
        </div>
        
      </div>
    
  )
}

export default App
