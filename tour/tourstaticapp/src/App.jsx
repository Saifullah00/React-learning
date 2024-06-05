import data from "./data"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  const cards = data.map(item => {
    return (
        <Hero
            key={item.id}
            {...item}
            
        />
    )
})   

  return (
    <>
      <Header/>
      {cards}
    </>
  )
}

export default App
