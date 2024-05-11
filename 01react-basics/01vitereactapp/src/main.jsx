import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Evaulated Expression
const userName = "Saifullah Dev"

//custom react element structure
const reactElement = React.createElement(
  'a', //tag
  {href:'https://google.com', target:'_blank'}, //object
  "Click me to visit Google", //some text
  userName //expresion
)

{/* <App /> */}
{/* object calling */}
ReactDOM.createRoot(document.getElementById('root')).render(
   
    reactElement
)
