import My from "./MyComponent"
import MySecondComp from "./MyComponenets2"


function App() {

  const username = "Saifullah"
  
  return (
    <>
      <My/>
      <h4>
        App.jsx content written by {username}
        {/* {username} is called evaluted expression it is final outcome after evaluation of JS syntax*/}
      </h4>
      <MySecondComp/>
    </>
  )
}

export default App
